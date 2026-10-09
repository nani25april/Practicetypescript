import {page} from '@playwright/test';

export class LoginPage {

    constructor(page)
     {
        this.page = page
    }

    async login(usernameInput: string, password: string) {
    const usernameInput = page.locator('#username');
    const passwordInput = page.locator('#password');
    const loginButton = page.locator('button[type="submit"]');


}
