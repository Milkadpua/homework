async function checkAllCreatedArticlesVisible(
  page: Page,
  articles: Article[],
  authorUsername: string
) {
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

    const nextPageLink = page.getByRole('link', {
      name: `${currentPage + 1}`,
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
