import { config } from '@fullcalendar/core/internal.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'
//import type { Course } from '~/modules/module'

//define the create course model interface
interface CreateCourseModel {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number;
  thumbnailUrl: string;
  categoryId: number;
  instructorId: number;
  titles: TitleModel[];
}

//interface titleModel {
interface TitleModel {
  titleEn: string;
  titleAr: string;
  videos: {
    title: string;
    videoUrl: string;
  }[];
}

interface CourseOrder {
  enrollmentId: number
  studentId: string
  studentName: string
  studentEmail: string
  courseId: number
  courseTitle: string
  price: number
  status: number
  createdAt: string
}

export const useCourseStore = defineStore('courseStore', () => {
  //const courses = ref<Course[]>([])
  const courses = ref<any[]>([]) // Use 'any' or define a Course interface
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Fetch all courses
  const fetchCourses = async () => {
    loading.value = true
    error.value = null
    try {
      const config = useRuntimeConfig()
      const data = await $fetch(`${config.public.apiBase}/api/course`) // adjust your endpoint
      console.log('Fetched courses:', data)
      courses.value = data as any[] // adjust based on actual data structure
      //courses.value = data
    } catch (err: any) {
      error.value = err?.message || 'Failed to fetch courses'
    } finally {
      loading.value = false
    }
  }

  // Fetch single course by ID
  const fetchCourseById = async (id: number) => {
    loading.value = true
    error.value = null
    try {
      const config = useRuntimeConfig()
      const data = await $fetch(`${config.public.apiBase}/api/course/${id}`)
      console.log('Fetched course by Id:', data)
      return data
    } catch (err: any) {
      error.value = err?.message || 'Failed to fetch course'
      throw err
    } finally {
      loading.value = false
    }
  }
  
  // Return my courses by user
  const fetchMyCourses = async () => {
    loading.value = true
    error.value = null
    try {
      const config = useRuntimeConfig()
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : null;
        if (!token) {
          throw new Error('User is not authenticated');
        }
        const data: [] = await $fetch(`${config.public.apiBase}/api/Enrollment/my-courses`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
      return data
    } catch (err: any) {
      error.value = err?.message || 'Failed to fetch my courses'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Create course
  const createCourse = async (courseData: CreateCourseModel) => {
    loading.value = true
    error.value = null
    try {
      const config = useRuntimeConfig()
      const data = await $fetch(`${config.public.apiBase}/api/course`, {
        method: 'POST',
        body: courseData,
      })
      courses.value.push(data)
    } catch (err: any) {
      error.value = err?.message || 'Failed to create course'
    } finally {
      loading.value = false
    }
  }
  
// Fetch all course orders - Admin
const fetchAllCourseOrders = async (): Promise<CourseOrder[]> => {
  loading.value = true
  error.value = null

  try {
    const config = useRuntimeConfig()

    const user = localStorage.getItem('user')

    if (!user) {
      throw new Error('User is not authenticated')
    }

    const token = JSON.parse(user).token

    if (!token) {
      throw new Error('User is not authenticated')
    }

    const data = await $fetch<CourseOrder[]>(
      `${config.public.apiBase}/api/Enrollment/all`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return data
  } catch (err: any) {
    error.value =
      err?.data?.message ||
      err?.message ||
      'Failed to fetch course orders'

    throw err
  } finally {
    loading.value = false
  }
}

// Update enrollment status - Admin
const updateEnrollmentStatus = async (
  id: number,
  status: number
) => {
  loading.value = true
  error.value = null

  try {
    const config = useRuntimeConfig()

    const user = localStorage.getItem('user')

    if (!user) {
      throw new Error('User is not authenticated')
    }

    const token = JSON.parse(user).token

    if (!token) {
      throw new Error('User is not authenticated')
    }

    return await $fetch(
      `${config.public.apiBase}/api/Enrollment/${id}/status`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          status,
        },
      }
    )
  } catch (err: any) {
    error.value =
      err?.data?.message ||
      err?.message ||
      'Failed to update enrollment status'

    throw err
  } finally {
    loading.value = false
  }
}

  return { loading, error, fetchCourses, fetchCourseById, courses, fetchMyCourses , createCourse ,fetchAllCourseOrders, updateEnrollmentStatus}
})
