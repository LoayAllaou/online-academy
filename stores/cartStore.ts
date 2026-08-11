import { defineStore } from 'pinia';
import { coursesData } from '@/data/courses';
import { events } from '@/data/events';
import { productData } from '@/data/products';
import { useCourseStore } from './courseStore';

export interface CartItem<T> {
  id: number;
  quantity: number;
  data: T;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartCourses: [] as CartItem<ReturnType<typeof useCourseStore>['courses'][0]>[],
    //cartCourses: [] as CartItem<typeof coursesData[0]>[],
    cartEvents: [] as CartItem<typeof events[0]>[],
    cartProducts: [] as CartItem<typeof productData[0]>[],
  }),

  getters: {
    isCourseAdded: (state) => (id: number) =>
      state.cartCourses.some((item) => item.id === id),

    isEventAdded: (state) => (id: number) =>
      state.cartEvents.some((item) => item.id === id),

    isProductAdded: (state) => (id: number) =>
      state.cartProducts.some((item) => item.id === id),
    clearCart: (state) => () => {
      state.cartCourses = [];
      state.cartEvents = [];
      state.cartProducts = [];
    },
  },

  actions: {
    async addCourseToCart(id: number) {
      const courseStore = useCourseStore();
      //add to enrolled
      const response = await this.addCourseToEnrolled({ courseId: id });
      //check if request succeeded then add to cart
      if (response) {
        console.log("Course added to enrolled successfully:", response);
        await this.loadUserCart();
      // if (!this.isCourseAdded(id)) {
      //   const course = await courseStore.fetchCourseById(id);
      //   if (course) {
      //     this.cartCourses.push({ id, quantity: 1, data: course });
      //     console.log("Course added to cart:", course);
      //     console.log("Current cartCourses:", this.cartCourses);
      //   }
      // }
      } else {
      console.error("Failed to add course to enrolled."); 
    }
    },

    async loadUserCart() {
      try {
        const config = useRuntimeConfig();
        // Get token from localStorage or Pinia store
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : null;
        if (!token) {
          throw new Error('User is not authenticated');
        }
        const data: [] = await $fetch(`${config.public.apiBase}/api/Enrollment/my`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Fetched user cart:', data);
        //Assuming data is an array of cart items with id and quantity
        if (Array.isArray(data)){
        this.cartCourses = data.map((item: any) => ({
          enrollmentId: item.id,
          id: item.courseId,
          quantity: 1,
          data: item.course, // You might want to fetch full course details separately
          }));
        }
      } catch (error) {
        console.error('Error loading user cart:', error);
      }
    },
    addEventToCart(id: number) {
      if (!this.isEventAdded(id)) {
        const event = events.find((e) => e.id === id);
        if (event) {
          this.cartEvents.push({ id, quantity: 1, data: event });
        }
      }
    },

    addProductToCart(id: number) {
      if (!this.isProductAdded(id)) {
        const product = productData.find((p) => p.id === id);
        if (product) {
          this.cartProducts.push({ id, quantity: 1, data: product });
        }
      }
    },

    setCartCourses(val: CartItem<typeof coursesData[0]>[]) {
      this.cartCourses = val;
    },

    setCartEvents(val: CartItem<typeof events[0]>[]) {
      this.cartEvents = val;
    },

    setCartProducts(val: CartItem<typeof productData[0]>[]) {
      this.cartProducts = val;
    },

    increaseQuantity(index: number) {
      if (this.cartCourses[index]) {
        this.cartCourses[index].quantity += 1;
      }
    },

    decreaseQuantity(index: number) {
      if (this.cartCourses[index] && this.cartCourses[index].quantity > 1) {
        this.cartCourses[index].quantity -= 1;
      }
    },

    removeCourse(id: number) {
      this.cartCourses = this.cartCourses.filter((item) => item.id !== id);
    },

    async addCourseToEnrolled( payload: {
      courseId: number;
      CouponCode?: string;
    }) {
      this.cartCourses = this.cartCourses.filter((item) => item.id !== payload.courseId);
      // Logic to add the course to enrolled courses can be implemented here

      console.log(`Course with id ${payload.courseId} added to enrolled courses.`);
      try {
      const config = useRuntimeConfig()
    // Get token from localStorage or Pinia store
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : null;
      if (!token) {
        throw new Error('User is not authenticated');
      }

      const data = await $fetch(`${config.public.apiBase}/api/Enrollment/add-to-cart`, {
          method: 'POST',
          body: payload,
          headers: {
        Authorization: `Bearer ${token}`,
      },
        })
        return data;
      } catch (error) {
        console.error('Error adding course to enrolled:', error);
      }
    },
    //placeOrder action to handle order placement
    async placeOrder(payload: {
      enrollmentIds: [number];
    }) {
      try {
        debugger;
        const config = useRuntimeConfig()
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : null;
        if (!token) {
          throw new Error('User is not authenticated');
        }
        const response = await $fetch(`${config.public.apiBase}/api/Enrollment/place-order`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: payload,
        });
        return response
      } catch (error) {
        return null
      }
  },
  },
});
