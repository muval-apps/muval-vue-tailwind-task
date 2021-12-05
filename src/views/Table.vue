<template>
    <div class="font-body z-0 py-10 max-w-7xl mx-auto h-screen">
        <div class="container flex justify-center mx-auto">
            <div class="flex flex-col">
                <div class="w-full">
                    <input type="text" class="px-4 my-3 leading-5 border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" placeholder="Search" v-model="searchInput" />

                    <div class="border-b border-gray-200 shadow">
                        <table class="table-fixed">
                            <thead class="bg-yellow-600">
                                <tr>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Name
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Registration
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Type
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Capacity
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Manufacturer
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Year
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Fuel
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-50">
                                        Transmission
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white" v-if="vehicles">
                                <tr class="whitespace-nowrap" v-for="vehicle in vehicles.data" :key="vehicle.registration">
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.name}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.registration}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.type}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.capacity}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.manufacturer}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.year}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.fuel}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {{vehicle.transmission}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                <p class="text-sm text-gray-700">
                                    Showing
                                    <span class="font-medium"> Page {{meta.current_page}} </span>
                                    of
                                    <span class="font-medium">{{meta.last_page}}</span>
                                </p>
                                </div>
                                <div>
                                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" v-if="meta.current_page > 1" @click="getPage(meta.current_page - 1)">
                                            <span class="sr-only">Previous</span>
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <div v-for="index in meta.last_page">
                                            <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" v-bind:class="activePage(index)" @click="getPage(index)">
                                                {{index}}
                                            </a>
                                        </div>
                                        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" v-if="meta.current_page < meta.last_page" @click="getPage(meta.current_page + 1)">
                                            <span class="sr-only">Next</span>
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { onBeforeMount, ref, watchEffect } from 'vue'; 

    export default {
        setup() {
            const limit = ref(10);
            let vehicles = ref([]);
            let meta = ref({});
            const searchInput = ref('');

            watchEffect(() => {
                getPage(1)
                console.log(searchInput.value);
            })

            onBeforeMount(() => {
                getPage(1)
            })

            function searchPage() {
                window.axios.get(`/vehicles?limit=${limit.value}&search=${searchInput.value}`)
                .then(response => {
                    vehicles.value = response.data
                    meta.value = response.data.meta
                })
                .catch(function (error) {
                    console.error('Search Axios', error);
                })
            }

            function getPage(pageNum) {
                window.axios.get(`/vehicles?limit=${limit.value}&page=${pageNum}&search=${searchInput.value}`)
                .then(response => {

                    vehicles.value = response.data
                    meta.value = response.data.meta
                })
                .catch(function (error) {
                    console.error('Page Axios', error);
                })
            }

            function activePage(pageNum) {
                return pageNum == meta.value.current_page ? 'z-10 bg-yellow-50 border-yellow-500' : ''
            }

            return {
                limit,
                vehicles,
                meta,
                searchInput,
                getPage,
                activePage
            }
        }
    }
</script>