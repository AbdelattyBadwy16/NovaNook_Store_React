
const Base_Url = 'https://uyktncrltbowrhtoewpq.supabase.co'
const Key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE"

export async function login({user,pass}) {
    const res = await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": user,
            "password": pass,
        }),
    });
    const data = await res.json();
    return data;
}

export async function signin({user,pass,email,phone}) {
    const res = await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/auth/v1/signup`, {
        method: "POST",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": pass,
        }),
    });
    const data = await res.json();
    return data;
}


export async function getUser(id) {

    const res = await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/users?userID=eq.${id}&select=*`, {
        method: "GET",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return data;
}

export async function getUserEmail(email) {

    const res = await fetch(`https://uyktncrltbowrhtoewpq.supabase.co/rest/v1/users?email=eq.${email}&select=*`, {
        method: "GET",
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3RuY3JsdGJvd3JodG9ld3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDA4MjIsImV4cCI6MjAxMjAxNjgyMn0.sy4uQwRpwv_tyCDcqIqJToQQv6Xe8exriHbNJWP9iLE",
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return data;
}

