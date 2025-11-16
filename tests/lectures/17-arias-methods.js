async function checkAllCreatedArticlesVisible(
  page: Page,
  articles: Article[],
  authorUsername: string
){
  let currentPage = 1;
  const foundArticles: string[] = [];
  const reversedArticles = [...articles].reverse();

  while (foundArticles.length < articles.length) {
    for (const article of reversedArticles) {
      if (foundArticles.includes(article.title)) continue;

      const articleLocator = getArticleByFields(
        page,
        article.title,
        article.description,
        authorUsername
      );
      const isVisible = await articleLocator.isVisible();
      if (isVisible) {
        foundArticles.push(article.title);
      }
    }

    if (foundArticles.length === articles.length) {
      return true;
    }

    const nextPageLink = page.getByRole("link", {
      name: ${currentPage + 1},
      exact: true,
    });
    const hasNextButton = await nextPageLink.isVisible();
    if (!hasNextButton) {
      break;
    }

    await nextPageLink.click();
    currentPage++;
    await page.waitForTimeout(2000);
  }

  return foundArticles.length === articles.length;
}

const response = {
  articles: [
    {
      slug: "article-32-1762964854687-7766x7",
      title: "Article-32-1762964854687",
      description: "Description-32",
      body: "Body content 32",
      createdAt: "2025-11-12T16:28:16.172Z",
      updatedAt: "2025-11-12T16:28:16.172Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-31-1762964854686-f4spir",
      title: "Article-31-1762964854686",
      description: "Description-31",
      body: "Body content 31",
      createdAt: "2025-11-12T16:28:14.978Z",
      updatedAt: "2025-11-12T16:28:14.978Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-30-1762964854685-38dhmt",
      title: "Article-30-1762964854685",
      description: "Description-30",
      body: "Body content 30",
      createdAt: "2025-11-12T16:28:13.785Z",
      updatedAt: "2025-11-12T16:28:13.785Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-29-1762964854684-usyadi",
      title: "Article-29-1762964854684",
      description: "Description-29",
      body: "Body content 29",
      createdAt: "2025-11-12T16:28:12.611Z",
      updatedAt: "2025-11-12T16:28:12.611Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-28-1762964854683-37ku51",
      title: "Article-28-1762964854683",
      description: "Description-28",
      body: "Body content 28",
      createdAt: "2025-11-12T16:28:11.336Z",
      updatedAt: "2025-11-12T16:28:11.336Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-27-1762964854682-84ai28",
      title: "Article-27-1762964854682",
      description: "Description-27",
      body: "Body content 27",
      createdAt: "2025-11-12T16:28:10.180Z",
      updatedAt: "2025-11-12T16:28:10.180Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-26-1762964854681-988asl",
      title: "Article-26-1762964854681",
      description: "Description-26",
      body: "Body content 26",
      createdAt: "2025-11-12T16:28:08.984Z",
      updatedAt: "2025-11-12T16:28:08.984Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-25-1762964854680-zb06r8",
      title: "Article-25-1762964854680",
      description: "Description-25",
      body: "Body content 25",
      createdAt: "2025-11-12T16:28:07.755Z",
      updatedAt: "2025-11-12T16:28:07.755Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-24-1762964854679-l6grkg",
      title: "Article-24-1762964854679",
      description: "Description-24",
      body: "Body content 24",
      createdAt: "2025-11-12T16:28:06.575Z",
      updatedAt: "2025-11-12T16:28:06.575Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
    {
      slug: "article-23-1762964854678-i88kwz",
      title: "Article-23-1762964854678",
      description: "Description-23",
      body: "Body content 23",
      createdAt: "2025-11-12T16:28:05.387Z",
      updatedAt: "2025-11-12T16:28:05.387Z",
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "testg3pcll7r",
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        following: false,
      },
    },
  ],
  articlesCount: 176,
};