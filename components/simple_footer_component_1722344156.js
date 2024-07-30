/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722344156", {
    template: `
    <div class="flex">
        <div class="w-64 bg-white dark:bg-gray-800 h-screen shadow-lg">
            <nav class="mt-5">
                <a href="#" class="block py-2 px-4 text-black dark:text-white hover:bg-purple-100 dark:hover:bg-purple-800">Home</a>
                <a href="#" class="block py-2 px-4 text-black dark:text-white hover:bg-purple-100 dark:hover:bg-purple-800">About</a>
                <a href="#" class="block py-2 px-4 text-black dark:text-white hover:bg-purple-100 dark:hover:bg-purple-800">Contact</a>
            </nav>
        </div>
        <div class="flex-1">
            <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
                <div id="footer-container" class="max-w-screen-xl p-6 py-8 mx-auto lg:py-16 md:p-10 lg:p-12">
                    <hr id="footer-divider" class="my-8 border-purple-200 sm:mx-auto dark:border-purple-700 lg:my-10">
                    <div id="footer-content" class="text-center">
                        <div class="flex">
                            <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-black dark:text-white">
                                <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10" alt="Landwind Logo" />
                                Blockchain Analytics Suite
                            </a>
                        </div>
                    </div>
                    <div class="flex">
                        <div id="footer-text" class="flex-1 block text-base text-center text-black dark:text-white">
                            Stay ahead of the curve with our cutting-edge blockchain analysis tools. Gain invaluable insights into emerging trends and opportunities.
                            Stay ahead of the curve with our cutting-edge blockchain analysis tools. Gain invaluable insights into emerging trends and opportunities.
                            <button class="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </footer> 
        </div>
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
