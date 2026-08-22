<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">

      <!-- Header -->
      <div class="row pb-30">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">
            Course Orders
          </h1>

          <div class="mt-10 text-light-1">
            Manage student course enrollment requests
          </div>
        </div>
      </div>

      <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4">

        <!-- ========================= -->
        <!-- TABS -->
        <!-- ========================= -->

        <div
          class="tabs__controls d-flex items-center pt-20 px-30 border-bottom-light"
        >
          <!-- All Orders -->
          <button
            type="button"
            :class="[
              'tabs__button',
              activeTab === 1 ? 'is-active' : ''
            ]"
            @click="activeTab = 1"
          >
            All Orders
          </button>

          <!-- Pending Payment -->
          <button
            type="button"
            :class="[
              'tabs__button ml-30',
              activeTab === 2 ? 'is-active' : ''
            ]"
            @click="activeTab = 2"
          >
            Pending Payment

            <span
              v-if="pendingPaymentCount > 0"
              class="pending-count"
            >
              {{ pendingPaymentCount }}
            </span>
          </button>
        </div>


        <!-- ========================= -->
        <!-- CONTENT -->
        <!-- ========================= -->

        <div class="py-30 px-30">

          <!-- ========================= -->
          <!-- SEARCH -->
          <!-- ========================= -->

          <div class="row mb-30">
            <div class="col-md-5">

              <form
                class="search-field border-light rounded-8 h-50"
                @submit.prevent
              >

                <input
                  v-model="searchQuery"
                  class="bg-white -dark-bg-dark-2 pr-50"
                  type="text"
                  placeholder="Search student or course..."
                />

                <button type="submit">
                  <i
                    class="icon-search text-light-1 text-20"
                  ></i>
                </button>

              </form>

            </div>
          </div>


          <!-- ========================= -->
          <!-- LOADING -->
          <!-- ========================= -->

          <div
            v-if="loading"
            class="text-center py-40"
          >
            <p>Loading course orders...</p>
          </div>


          <!-- ========================= -->
          <!-- ERROR -->
          <!-- ========================= -->

          <div
            v-else-if="error"
            class="text-center py-40"
          >
            <p class="text-red-1">
              {{ error }}
            </p>

            <button
              class="button -sm -purple-1 text-white mt-15"
              @click="loadOrders"
            >
              Try Again
            </button>
          </div>


          <!-- ========================= -->
          <!-- EMPTY -->
          <!-- ========================= -->

          <div
            v-else-if="filteredOrders.length === 0"
            class="text-center py-40"
          >
            <p class="text-17 fw-500">
              No course orders found.
            </p>

            <p class="text-light-1 mt-10">
              Try changing your search or selected tab.
            </p>
          </div>


          <!-- ========================= -->
          <!-- TABLE -->
          <!-- ========================= -->

          <div
            v-else
            class="table-wrapper"
          >

            <table class="orders-table">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th class="action-header">
                    Action
                  </th>
                </tr>
              </thead>


              <tbody>

                <tr
                  v-for="(order, index) in pageItems"
                  :key="order.enrollmentId"
                >

                  <!-- Number -->
                  <td class="number-cell">
                    {{
                      (currentPage - 1) * pageCapacity +
                      index +
                      1
                    }}
                  </td>


                  <!-- Student -->
                  <td class="student-cell">

                    <div class="fw-500">
                      {{ order.studentName || "-" }}
                    </div>

                    <div
                      v-if="order.studentEmail"
                      class="text-13 text-light-1 mt-5"
                    >
                      {{ order.studentEmail }}
                    </div>

                  </td>


                  <!-- Course -->
                  <td class="course-cell">
                    {{ order.courseTitle || "-" }}
                  </td>


                  <!-- Price -->
                  <td class="price-cell">
                    {{ formatPrice(order.price) }}
                  </td>


                  <!-- Status -->
                  <td class="status-cell">

                    <span
                      class="status-badge"
                      :class="statusClass(order.status)"
                    >
                      {{ getStatusName(order.status) }}
                    </span>

                  </td>


                  <!-- Date -->
                  <td class="date-cell">
                    {{ formatDate(order.createdAt) }}
                  </td>


                  <!-- Action -->
                  <td class="action-cell">

                    <!-- Pending Payment -->
                    <div
                      v-if="
                        order.status ===
                        EnrollmentStatus.PendingPayment
                      "
                      class="action-buttons"
                    >

                      <!-- Mark Paid -->
                      <button
                        class="button -sm -green-1 text-white action-button"
                        :disabled="
                          updatingId ===
                          order.enrollmentId
                        "
                        @click="
                          updateStatus(
                            order,
                            EnrollmentStatus.Paid
                          )
                        "
                      >
                        <span
                          v-if="
                            updatingId ===
                            order.enrollmentId
                          "
                        >
                          Updating...
                        </span>

                        <span v-else>
                          Mark as Paid
                        </span>
                      </button>


                      <!-- Cancel -->
                      <button
                        class="button -sm -red-1 text-white action-button"
                        :disabled="
                          updatingId ===
                          order.enrollmentId
                        "
                        @click="
                          updateStatus(
                            order,
                            EnrollmentStatus.Cancelled
                          )
                        "
                      >
                        Cancel
                      </button>

                    </div>


                    <!-- Paid / Cancelled / Pending -->
                    <span
                      v-else
                      class="text-light-1 text-13 no-action"
                    >
                      No action
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          <!-- ========================= -->
          <!-- PAGINATION -->
          <!-- ========================= -->

          <div
            v-if="filteredOrders.length > pageCapacity"
            class="row justify-center pt-30"
          >

            <div class="col-auto">

              <Pagination
                :data-length="filteredOrders.length"
                :page-capacity="pageCapacity"
                :page-number="currentPage"
                @update:page-number="
                  currentPage = $event
                "
              />

            </div>

          </div>

        </div>
      </div>
    </div>

    <FooterNine />
  </div>
</template>


<script setup>
import {
  ref,
  computed,
  onMounted,
  watch,
} from "vue";

import FooterNine from "../layout/footers/FooterNine";
import Pagination from "../common/PaginationTwo";

import { useCourseStore } from "@/stores/courseStore";


// ===============================
// STORE
// ===============================

const courseStore = useCourseStore();


// ===============================
// DATA
// ===============================

const orders = ref([]);

const loading = ref(false);

const error = ref(null);

const updatingId = ref(null);


// ===============================
// FILTERS
// ===============================

const activeTab = ref(1);

const searchQuery = ref("");


// ===============================
// PAGINATION
// ===============================

const currentPage = ref(1);

const pageCapacity = ref(10);


// ===============================
// ENROLLMENT STATUS
// ===============================
//
// C#:
//
// public enum EnrollmentStatus
// {
//     Pending = 0,
//     PendingPayment = 1,
//     Paid = 2,
//     Cancelled = 3
// }

const EnrollmentStatus = {
  Pending: 0,
  PendingPayment: 1,
  Paid: 2,
  Cancelled: 3,
};


// ===============================
// STATUS NAME
// ===============================

const getStatusName = (status) => {
  const names = {
    [EnrollmentStatus.Pending]: "Pending",

    [EnrollmentStatus.PendingPayment]:
      "Pending Payment",

    [EnrollmentStatus.Paid]: "Paid",

    [EnrollmentStatus.Cancelled]: "Cancelled",
  };

  return names[status] ?? "Unknown";
};


// ===============================
// STATUS STYLE
// ===============================

const statusClass = (status) => {
  switch (status) {

    case EnrollmentStatus.Pending:
      return "status-pending";

    case EnrollmentStatus.PendingPayment:
      return "status-pending-payment";

    case EnrollmentStatus.Paid:
      return "status-paid";

    case EnrollmentStatus.Cancelled:
      return "status-cancelled";

    default:
      return "status-unknown";
  }
};


// ===============================
// FILTER ORDERS
// ===============================

const filteredOrders = computed(() => {

  let result = [...orders.value];


  // =============================
  // STATUS FILTER
  // =============================

  if (activeTab.value === 2) {

    result = result.filter(
      (order) =>
        order.status ===
        EnrollmentStatus.PendingPayment
    );

  }


  // =============================
  // SEARCH FILTER
  // =============================

  const query =
    searchQuery.value
      .trim()
      .toLowerCase();


  if (query) {

    result = result.filter((order) => {

      const studentName =
        order.studentName
          ?.toLowerCase() || "";

      const studentEmail =
        order.studentEmail
          ?.toLowerCase() || "";

      const courseTitle =
        order.courseTitle
          ?.toLowerCase() || "";


      return (
        studentName.includes(query) ||
        studentEmail.includes(query) ||
        courseTitle.includes(query)
      );

    });

  }


  return result;
});


// ===============================
// PENDING PAYMENT COUNT
// ===============================

const pendingPaymentCount = computed(() => {

  return orders.value.filter(
    (order) =>
      order.status ===
      EnrollmentStatus.PendingPayment
  ).length;

});


// ===============================
// PAGINATION
// ===============================

const pageItems = computed(() => {

  const start =
    (currentPage.value - 1) *
    pageCapacity.value;

  const end =
    start + pageCapacity.value;

  return filteredOrders.value.slice(
    start,
    end
  );

});


// ===============================
// LOAD ORDERS
// ===============================

const loadOrders = async () => {

  loading.value = true;

  error.value = null;


  try {

    orders.value =
      await courseStore.fetchAllCourseOrders();

    console.log(
      "Course orders:",
      orders.value
    );

  } catch (err) {

    console.error(err);

    error.value =
      "Unable to load course orders.";

  } finally {

    loading.value = false;

  }

};


// ===============================
// UPDATE STATUS
// ===============================

const updateStatus = async (
  order,
  status
) => {

  // Prevent duplicate clicks
  if (
    updatingId.value ===
    order.enrollmentId
  ) {
    return;
  }


  // Confirm cancellation
  if (
    status ===
    EnrollmentStatus.Cancelled
  ) {

    const confirmed =
      window.confirm(
        "Are you sure you want to cancel this course order?"
      );

    if (!confirmed) {
      return;
    }

  }


  updatingId.value =
    order.enrollmentId;


  try {

    await courseStore.updateEnrollmentStatus(
      order.enrollmentId,
      status
    );


    // Update UI immediately
    order.status = status;


  } catch (err) {

    console.error(err);

    error.value =
      "Unable to update order status.";

  } finally {

    updatingId.value = null;

  }

};


// ===============================
// FORMAT PRICE
// ===============================

const formatPrice = (price) => {

  if (
    price === null ||
    price === undefined
  ) {
    return "-";
  }

  return `${Number(price).toFixed(2)}`;

};


// ===============================
// FORMAT DATE
// ===============================

const formatDate = (date) => {

  if (!date) {
    return "-";
  }

  return new Date(
    date
  ).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

};


// ===============================
// RESET PAGINATION
// ===============================

watch(
  [activeTab, searchQuery],
  () => {

    currentPage.value = 1;

  }
);


// ===============================
// LOAD
// ===============================

onMounted(() => {

  loadOrders();

});
</script>


<style scoped>

/* =====================================
   TABLE
===================================== */

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.orders-table {
  width: 100%;
  min-width: 1050px;
  border-collapse: collapse;
}

.orders-table th,
.orders-table td {
  vertical-align: middle;
  padding: 15px 12px;
}

.orders-table thead th {
  font-weight: 600;
  white-space: nowrap;
}

.orders-table tbody tr {
  border-bottom: 1px solid #eeeeee;
}

.orders-table tbody tr:last-child {
  border-bottom: none;
}


/* =====================================
   COLUMNS
===================================== */

.number-cell {
  width: 50px;
  min-width: 50px;
}

.student-cell {
  min-width: 190px;
}

.course-cell {
  min-width: 220px;
  max-width: 300px;
}

.price-cell {
  min-width: 100px;
  white-space: nowrap;
}

.date-cell {
  min-width: 120px;
  white-space: nowrap;
}


/* =====================================
   STATUS
===================================== */

.status-cell {
  width: 160px;
  min-width: 160px;
  white-space: nowrap;
}

.status-badge {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-width: 125px;

  padding: 7px 12px;

  border-radius: 8px;

  font-size: 13px;

  font-weight: 600;

  line-height: 1;

  white-space: nowrap;
}


/* Pending */

.status-pending {
  background-color: #fff4d6;
  color: #9a6700;
}


/* Pending Payment */

.status-pending-payment {
  background-color: #fff0d9;
  color: #b35a00;
}


/* Paid */

.status-paid {
  background-color: #e4f7ed;
  color: #16834b;
}


/* Cancelled */

.status-cancelled {
  background-color: #ffe5e5;
  color: #d63636;
}


/* Unknown */

.status-unknown {
  background-color: #eeeeee;
  color: #666666;
}


/* =====================================
   ACTIONS
===================================== */

.action-header {
  width: 250px;
  min-width: 250px;
  text-align: right;
}

.action-cell {
  width: 250px;
  min-width: 250px;
  white-space: nowrap;
}

.action-buttons {
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 8px;

  white-space: nowrap;
}

.action-button {
  flex-shrink: 0;

  white-space: nowrap;

  min-width: auto;
}

.no-action {
  white-space: nowrap;
}


/* =====================================
   PENDING COUNT
===================================== */

.pending-count {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 22px;

  height: 22px;

  margin-left: 8px;

  padding: 0 6px;

  border-radius: 20px;

  background: #f59e0b;

  color: #ffffff;

  font-size: 11px;

  font-weight: 600;
}


/* =====================================
   MOBILE
===================================== */

@media (max-width: 768px) {

  .orders-table {
    min-width: 1000px;
  }

  .status-badge {
    min-width: 125px;
  }

  .action-cell,
  .action-header {
    width: 240px;
    min-width: 240px;
  }

}

</style>