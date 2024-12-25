import * as cheerio from 'cheerio';
import axios from 'axios'
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { intrest } = await request.json();
    let css_selector ="af ag ah ai aj ak al am an ao ap aq ar as at"
    let corsProxy = "https://cors-anywhere.herokuapp.com/";
    let link = "https://medium.com/search/posts?q=" + intrest 
    let res = await axios.get(link)
    let $ = cheerio.load(res.data) 
    let a = $('a.' + css_selector)
    let title = a.children("h3").text()
    let articleLink = a.attr("href")
    let description = a.children("p").text()

	return json({title, articleLink, description});
}
