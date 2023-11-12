<script>
    export let title = "Jeremy";
    export let description = "Jeremy from Accounting";
    export let keywords = "";
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="title" property="og:title" content={title} />
    <meta name="description" property="og:description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="topic" content={keywords} />
    <meta name="language" content="EN" />
    <meta name="robots" content="index, follow" />
    <meta name="abstract" content={description} />
    <meta name="summary" content={description} />
    <meta name="author" content="Lucas Gover" />
    <meta name="url" content="http://www.lucasgover.com" />
  </svelte:head>