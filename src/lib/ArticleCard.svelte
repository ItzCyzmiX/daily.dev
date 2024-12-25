<script>
    export let title = "";
    export let description = "";
    export let platform = "";
    export let readMoreUrl = "";
</script>

<div
    class="bg-transparent rounded-lg shadow-md overflow-hidden  duration-150 w-[400px] border border-gray-500 transition-all hover:shadow-blue-900 hover:shadow-sm "
>
    <div class="p-6">
        <div class="flex justify-center items-center p-0 m-0">
            <a
            href={readMoreUrl}
            target="_blank"
            class="text-xl font-bold text-gray-100 mb-3 cursor-pointer text-center group relative"
        >
            <div class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            {title}
        </a>
        </div>

        <div class="border-t border-gray-700 m-2"></div>
        <p class="text-gray-300 text-sm leading-relaxed">
            {description}
        </p>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <div class="w-4 h-2 rounded-full bg-gray-700"></div>
                <span class="text-sm text-gray-400">{platform}</span>
            </div>
            <a
                href={readMoreUrl}
                target="_blank"
                class="text-sm text-gray-300 border border-gray-400 px-2 py-1 rounded-md hover:bg-gray-700 hover:text-gray-100 transition-colors duration-150"
                >Read More</a
            >
        </div>
    </div>
</div>
