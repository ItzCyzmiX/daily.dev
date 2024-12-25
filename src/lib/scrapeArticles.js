import * as cheerio from 'cheerio';
import axios from 'axios'


async function scrapeArticles(intrest) {
    let css_selector ="af ag ah ai aj ak al am an ao ap aq ar as at"
    let corsProxy = "https://cors-anywhere.herokuapp.com/";
    let link = "https://medium.com/search/posts?q=" + intrest 
    let res = await axios.get(corsProxy + link, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    let $ = cheerio.load(res.data) 
    let a = $('a.' + css_selector)
    console.log(a)
}

export default scrapeArticles