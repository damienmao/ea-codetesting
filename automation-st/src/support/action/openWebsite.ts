export default async(page) => {

    const url =browser.options.baseUrl+page;

    browser.url(url);

}
