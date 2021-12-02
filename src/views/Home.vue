<template>
    <div class="font-body z-0 max-w-7xl mx-auto h-screen">

        <!-- Remove this block -->

        <div class="flex w-full h-full">
            <div class="m-auto w-full">
                <div class="max-w-4xl mx-auto bg-white shadow rounded-md">
                   <SvgIcon class="mx-auto w-32" name="muval_logo"/>

                   <div class="flex flex-col w-full text-center">
                       <span class="mx-auto">Muval Frontend Task</span>
                       <div>
                            <ul role="list" class="divide-y px-20 py-5 divide-gray-200">
                            <li class="py-4 flex">
                                <div class="ml-3">
                                <p class="text-sm text-gray-500">Vue 3, Vite</p>
                                </div>
                            </li>

                            <li class="py-4 flex">
                                <div class="ml-3">
                                <p class="text-sm text-gray-500">Tailwind CSS <a class="text-brand" href="https://tailwindcss.com/docs">https://tailwindcss.com/docs</a></p>
                                </div>
                            </li>

                            <li class="py-4 flex">
                                <div class="ml-3">
                                <p class="text-sm text-gray-500">Pinia Store: <a class="text-brand" href="https://pinia.esm.dev/">https://pinia.esm.dev/</a> (you don't have to use this it's just a lightweight store we use instead of vuex)</p>
                                </div>
                            </li>

                                <li class="py-4 flex">
                                <div class="ml-3">
                                <p class="text-sm text-gray-500">Axios instance accessed via <span class="code">window.axios</span></p>
                                </div>
                            </li>
                            </ul>
                       </div>
                   </div>

                   <div class="flex py-8">
                       <div class="px-20">
                           Create a table view <span class="code">views/Table.vue</span> and link to this via the <span class="px-2 py-0.5 bg-brand rounded-md text-white text-xs my-auto">Button</span> below. Then within this view using as many or as little components as you see fit create:
                        
                            <br/><br/>
                            A table that calls the <span class="code">api.muval.dev/api/v1/vehicles</span> endpoint displaying a limit of 10 vehicles at a time and pagination to navigate to the pages in the table (make use of the meta data returned via the vehicles endpoint) The columns to be displayed: name, registration, type, capacity, manufacturer, year, fuel and transmission. Bonus points to have a little search input above the table to search via the query param <span class="code">search</span>    

                            <div class="mt-3">
                                Query params vehicles endpoint accepts:
                                <span class="code">page</span>,
                                <span class="code">limit</span>,
                                <span class="code">search</span>
                            </div>
                       </div>
                   </div>

                   <div class="flex flex-col pb-5 space-y-4">
                       <span class="mx-auto text-xs italic">Please link this button (make it a router-link) to the new table view you create</span>
                        <router-link :to="{ name: 'Table' }" class="flex px-8 py-3 rounded-lg bg-brand text-white mx-auto">
                            Button
                        </router-link>
                   </div>
                </div>
            </div>
        </div>
        <!-- Remove this block -->

        <div class="mt-10 mb-32 sm:mt-32 sm:mb-32 max-w-5xl mx-auto">
            <router-view/>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
export default {
    name: 'Home'
}
</script>

<style>
body {
    background: #fafafa;
}
</style>
