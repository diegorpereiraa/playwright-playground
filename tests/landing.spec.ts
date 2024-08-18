import { test, expect } from '@playwright/test';
import exp from 'constants';
import { TestContext } from 'node:test';
import { text } from 'stream/consumers';

test.describe('Playground Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Validate Playground Links', async ({ page }) => {
    await test.step('Validate Home Link', async () => {
      await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
    });

    await test.step('Validate Login Link', async () => {
      await expect(page.getByRole('link', { name: 'LOGIN' })).toBeVisible();
    });

    await test.step('Validate Form Link', async () => {
      await expect(page.getByRole('link', { name: 'FORM' })).toBeVisible();
    });

    await test.step('Validate Table Link', async () => {
      await expect(page.getByRole('link', { name: 'TABLE' })).toBeVisible();
    });

    await test.step('Validate About Link', async () => {
      await expect(page.getByRole('link', { name: 'SOBRE' })).toBeVisible();
    });
  });

  test('Validate Playground Home Elements', async ({ page }) => {
    await page.getByRole('link', { name: 'HOME' }).click();

    await test.step('Validate Banner', async () => {
      await expect(
        page.getByRole('img', { name: 'Bug Buster Mentoria Banner' })
      ).toBeVisible();
    });

    await test.step('Validate Home Description', async () => {
      await expect(
        page.getByText('Esta página foi desenvolvida')
      ).toBeVisible();
    });

    await test.step('Validate Home Challenges Information', async () => {
      await expect(
        page.getByRole('heading', { name: 'Desafios Disponíveis:' })
      ).toBeVisible();
      await expect(page.getByText('Login', { exact: true })).toBeVisible();
      await expect(page.getByText('Formulários')).toBeVisible();
      await expect(page.getByText('Tabela dinâmica')).toBeVisible();
      await expect(page.getByText('E muito mais!')).toBeVisible();
      await expect(page.getByText('© 2024 Bug Buster Mentoria.')).toBeVisible();
    });
  });

  test('Validate Playground Login Elements', async ({ page }) => {
    await page.getByRole('link', { name: 'LOGIN' }).click();

    await test.step('Validate PlayGround Login Instructions Title', async () => {
      await expect(
        page.getByText('HOMELOGINFORMTABLESOBRE').nth(1)
      ).toBeVisible();
      await expect(page.locator('#instructionsLoginHeader')).toHaveText(
        /Instruções Login/
      );
    });

    await test.step('Validate PlayGround Login Instructions 1', async () => {
      await expect(page.locator('#instructionsLoginItem1')).toBeVisible();
      await expect(page.getByText('Quando utilizar username e')).toHaveText(
        /Quando utilizar username e senha corretos, deve retornar usuário logado/
      );
    });

    await test.step('Validate PlayGround Login Instructions 2', async () => {
      await expect(page.getByText('Login ou senha incorretos')).toBeVisible();
      await expect(page.getByText('Login ou senha incorretos')).toHaveText(
        /Login ou senha incorretos devem retornar uma mensagem de erro./
      );
    });

    await test.step('Validate PlayGround Login Instructions 3', async () => {
      await expect(page.getByText('Três senhas incorretas')).toBeVisible();
      await expect(page.getByText('Três senhas incorretas')).toHaveText(
        /Três senhas incorretas bloqueiam a conta temporariamente./
      );
    });

    await test.step('Validate Playground Login Title', async () => {
      await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Login' })).toHaveText(
        /Login/
      );
    });

    await test.step('Validate Playground Login Username Title', async () => {
      await expect(page.getByText('Usuário', { exact: true })).toBeVisible();
      await expect(page.getByText('Usuário', { exact: true })).toHaveText(
        /Usuário/
      );
    });

    await test.step('Validate Playground Login Username Field', async () => {
      await expect(page.getByPlaceholder('Digite seu usuário')).toBeVisible();
    });

    await test.step('Validate Playground Login Username Title', async () => {
      await expect(page.getByText('Senha', { exact: true })).toBeVisible();
      await expect(page.getByText('Senha', { exact: true })).toHaveText(
        /Senha/
      );
    });

    await test.step('Validate Playground Login Password Field', async () => {
      await expect(page.getByPlaceholder('Digite sua senha')).toBeVisible();
    });

    await test.step('Validate Playground Login Button', async () => {
      await expect(page.getByRole('button', { name: 'Logar' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Logar' })).toHaveText(
        /Logar/
      );
    });
  });
});
