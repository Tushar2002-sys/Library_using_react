const apiurl='https://openlibrary.org/subjects/fiction.json';
const apiurl2='https://jsonplaceholder.typicode.com';

async function fetchbook()
{
    try{
        const response = await fetch(`${apiurl2}/posts`);
        if(!response.ok)
        {
            throw new Error(`Failed to fetch posts: ${response.status}`);
        }
        return  await response.json();
        
        
    }
    catch(e)
    {
        console.log(e);
    }

}    

async function listbooks(book_id)
{   
    const book_conatiner_element=document.getElementById(book_id);
    if(!book_conatiner_element)
    {
        return ;
    }
    fetchbook().then((books)=> {
        if(!books)
        {
            book_conatiner_element.innerHTML='No Books';
            return ;
        }
        else 
        {
            for(const book of books)
            {
                book_conatiner_element.appendChild(bookElement(book) );
            }
        }

    }).catch(e=>{
        console.log(e)
    })
}

function bookElement(book)
{
    const anchorElement=document.createElement('a');
    anchorElement.setAttribute('href',`${apiurl2}/posts/${book}`);
    anchorElement.setAttribute('target','_blank');
    anchorElement.innerText=book.title;

    const booktitle_element=document.createElement('h3');
    booktitle_element.appendChild(anchorElement);
    return booktitle_element;
}