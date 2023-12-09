import { createClient } from "@supabase/supabase-js";


const Base_Url = 'https://uyktncrltbowrhtoewpq.supabase.co'
const Key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE"
const supabase = createClient(Base_Url, Key)

export async function fetchItems() {


    const res = await fetch(`${Base_Url}/rest/v1/items?select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();

    return data;
}



export async function fetchSpecificItems(id) {

    const res = await fetch(`${Base_Url}/rest/v1/items?categoryID=eq.${id}&select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    return data;
}

export async function fetchSpecificItem(id) {
    const res = await fetch(`${Base_Url}/rest/v1/items?id=eq.${id}&select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    return data;
}

export async function fetctNewItems() {

    const res = await fetch(`${Base_Url}/rest/v1/items?newItem=eq.1&select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    return data;
}

export async function fetctDiscountItems() {

    const res = await fetch(`${Base_Url}/rest/v1/items?isDiscount=eq.1&select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    return data;
}





export async function insertItem(name, price, discount, category, image, description) {

    let imagePath = "";
    category = parseInt(category);
    switch (category) {
        case 3:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/SportClothes.jpg";
            break;
        case 2:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/laptop.jpg?t=2023-10-07T11%3A42%3A05.228Z";
            break;
        case 1:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/phones.webp?t=2023-10-07T11%3A42%3A31.537Z";
            break;
        case 4:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/babyGame.webp";
            break;
        case 5:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/books.webp";
            break;
        case 6:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/clothes.webp";
            break;
        case 7:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/computer.webp";
            break;
        case 8:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Categories/electronics.jpg?t=2023-10-07T11%3A45%3A05.846Z";
            break;
        case 9:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Items/pro-gamer-character-with-gun-console-illustration_559639-76.webp?t=2023-10-07T11%3A46%3A58.082Z";
            break;
        case 10:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Items/there-is-cat-that-is-sitting-stained-glass-window-generative-ai_974546-6277.webp?t=2023-10-07T11%3A48%3A16.148Z";
            break;
        case 11:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Items/young-musician-singing-stage-with-microphone-generated-by-ai_188544-34503.jpg";
            break;
        case 12:
            imagePath = "https://uyktncrltbowrhtoewpq.supabase.co/storage/v1/object/public/Items/3d-soccer-ball-isolated-white-background_768733-1075.jpg?t=2023-10-07T12%3A09%3A59.241Z";
            break;

    }

    await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/items`, {
        method: "POST",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
            'Accept': 'application/json',
            "Authorization": "Bearer"
        },
        body: JSON.stringify({
            "name": name,
            "categoryID": parseInt(category),
            "image": imagePath,
            "description": description,
            "price": price,
            "discount": discount,
            "rating": 0,
            "newItem": 1,
            "isDiscount": discount === 0 ? 0 : 1,

        }),

    });



}
    



export async function fetchCategories() {

    const res = await fetch(`${Base_Url}/rest/v1/Category?select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    return data;
}

export async function fetchSpecificCategorie(id) {

    const res = await fetch(`${Base_Url}/rest/v1/Category?id=eq.${id}&select=name`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    return data;
}


export async function insertOrder(len, totalPrice, name, address ) {
    if(len===undefined)return;
    await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/orders`, {
        method: "POST",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
            'Accept': 'application/json',
            "Authorization": "Bearer"
        },
        body: JSON.stringify({
            "amount": len,
            "totalPrice": totalPrice,
            "address": address,
            "client": name ,
            "state" : 0
        }),

    });

}

export async function updateOrder(id,time) {
    await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/orders?id=eq.${id}`, {
        method: "PATCH",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
        },
        body: JSON.stringify({
            "state" : 1,
            "arrivalTime" : time
        }),

    });

}

export async function getOrders() {

    const res = await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/orders?select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();

    return data;
}


export async function getUserOrders(name) {

    const res = await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/orders?client=eq.${name}&select=`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();

    return data;
}

export async function insertUserData({ user, email, phone, id }) {
    await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/users`, {
        method: "POST",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
            'Accept': 'application/json',
            "Authorization": "Bearer"
        },
        body: JSON.stringify({
            "name": user,
            "phone": phone,
            "userID": id,
            "email": email

        }),

    });

}


export async function searchItems(term) {

    const res = await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/items?name=ilike.${term}&select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    // console.log(data);
    return data;
}


export async function fetchItemComments(id) {

    const res = await fetch(`${Base_Url}/rest/v1/Comments?itemID=eq.${id}&select=*`, {
        method: "GET",
        headers: {
            "apikey": Key,
        },
    });
    const data = await res.json();
    return data;
}

export async function insertComment(userID, name, description, itemID, rate) {
    await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/Comments`, {
        method: "POST",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
            'Accept': 'application/json',
            "Authorization": "Bearer"
        },
        body: JSON.stringify({
            "userID": userID,
            "description": description,
            "itemID": itemID,
            "rate": rate,
            "user": name
        }),

    });

}

export async function deleteItemComments(id) {

    const res = await fetch(`${Base_Url}/rest/v1/Comments?id=eq.${id}`, {
        method: "DELETE",
        headers: {
            "apikey": Key,
        },
    });
    
}