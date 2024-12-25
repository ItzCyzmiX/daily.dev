<script>
    import ArticlesContainer from "../lib/ArticlesContainer.svelte";
    import ArticleCard from "../lib/ArticleCard.svelte";
    import BG from "../lib/BG.svelte";
    import Hero from "../lib/Hero.svelte";
</script>


<main class="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
    <BG />
    <!-- Hero Section -->
    <Hero />

    <!-- Articles Section -->
    <section class="flex flex-col items-center justify-center pb-10 relative z-10">
        <div class="pb-20">
            <h2 class="text-3xl font-bold text-white mb-12 text-center">Featured Articles</h2>
            <div class="flex flex-wrap justify-center items-center gap-6 ">
                <ArticleCard
                    title="Sample Article 1"
                    description="This is a sample description for the first article. It demonstrates how the card will look with actual content."
                    platform="Medium"
                    readMoreUrl="#"
                />
                <ArticleCard
                    title="Sample Article 2"
                    description="Another interesting article description goes here. This shows how multiple cards will be displayed."
                    platform="Medium"
                    readMoreUrl="#"
                />
                <ArticleCard
                    title="Sample Article 3"
                    description="A third article to demonstrate the grid layout and how cards will wrap on different screen sizes."
                    platform="Medium"
                    readMoreUrl="#"
                />
            </div>
        </div>
    </section>
</main>

