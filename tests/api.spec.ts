

import { test, expect } from '@playwright/test';

test.only('get request', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');


   expect(response.status()).toBe(200);

//const responsebody = await response.body();
 // console.log(responsebody.toString());
  ////const responseText = await response.text();
  ////console.log(responseText);
  const responseHeaders = response.headers();   
  console.log(responseHeaders);
  // const responseJSON = await response.json();
  // console.log(responseJSON);
  // expect(responseJSON.data.id).toBe(2);
  // expect(responseJSON.data.first_name).toBe('Janet');
  // expect(responseJSON.data.last_name).toBe('Weaver');
  // expect(responseJSON.data.email).toBe('janet.weaver@reqres.in');
  // expect(responseJSON.data.avatar).toBe('https://reqres.in/img/faces/2-image.jpg');

  // expect(responseJSON.support.url).toBe('https://benhowdle.im/first-cto-playbook?utm_source=reqres&utm_medium=json&utm_campaign=referral');
});

//https://api.playwrightpad.in/api/auth/sync

test('post request', async ({ request }) => {
  const response = await request.post('https://api.playwrightpad.in/api/auth/sync', {
    



  }


  );
   expect(response.status()).toBe(200);
const responseJSON = await response.json();
  console.log(responseJSON);
  
});