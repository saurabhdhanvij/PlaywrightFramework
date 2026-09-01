import{test, expect} from '@playwright/test'

const API_Key= "pro_a2f048da2b87708374d82d4f622f58974a5203ceae2314f9ad93a3b2c1c16e80";


test('APit reuest get', async({request})=>{
    const response= await request.get(
  "https://reqres.in/api/users?page=2", { headers: { 'x-api-key': API_Key } });

    await expect(response.status()).toBe(200);

    const jsondata= await response.json();
    console.log(jsondata);
})

test('API request post', async({request})=>{
    const response= await request.post(
  "https://reqres.in/api/users", { headers: { 'x-api-key': API_Key },
  data: {
    name: "Saurabh",
    job: "leader"
  }});
    await expect(response.status()).toBe(201);
    const jasondata= await response.json();
    console.log(jasondata);
})