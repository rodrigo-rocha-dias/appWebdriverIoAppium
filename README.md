# Testes Automatizados Mobile com WebdriverIO e Appium

Este repositório contém a configuração e execução de testes automatizados para aplicativos mobile utilizando WebdriverIO, Appium e BrowserStack.

## 📌 Planejamento
- **Linguagem**: JavaScript
- **Framework**: WebdriverIO + Appium
- **Ferramenta de Automação**: Appium
- **Relatório**: Allure Report ou HTML Report

## 🚀 Instalação e Configuração

### 1️⃣ Instalar Node.js e NPM
Antes de prosseguir, verifique se o Node.js e o NPM estão instalados:
```sh
node -v
npm -v
```
Caso não estejam instalados, baixe e instale [Node.js](https://nodejs.org/).

### 2️⃣ Instalar Appium e Dependências
Instale o Appium globalmente:
```sh
npm install -g appium
npm install -g wdio-cli
```

Crie o diretório do projeto e instale as dependências:
```sh
mkdir mobile-tests && cd mobile-tests
npm init -y
npm install webdriverio @wdio/appium-service @wdio/mocha-framework @wdio/spec-reporter
```

### 3️⃣ Configurar WebdriverIO para Appium
Execute o seguinte comando para configurar o WebdriverIO:
```sh
npx wdio config
```
Configurações recomendadas:
- **E2E Testing**
- **On my local machine**
- **Mobile - Android/iOS**
- **UIAutomator2** (para Android)
- **Cucumber (BDD)**
- **Feature files e Step Definitions**
- **Page Object Pattern**
- **Spec, allure reporters**
- **Appium como serviço**

### 4️⃣ Instalar o driver UIAutomator2
```sh
appium driver install uiautomator2
```

### 5️⃣ Executar o Appium
Navegue até a pasta do projeto e execute:
```sh
appium
```
Ou especifique o caminho base:
```sh
appium --base-path /wd/hub
```

### 6️⃣ Configuração do Emulador
Verifique se as variáveis de ambiente do Android estão configuradas corretamente:
```sh
echo $Env:ANDROID_HOME
echo $Env:ANDROID_SDK_ROOT
```
Para iniciar um emulador específico:
```sh
emulator -avd Pixel_6_API_34
```
Se quiser manter o emulador aberto mesmo após fechar o terminal:
```sh
Start-Process emulator -ArgumentList "-avd Pixel_6_API_34"
```

### 7️⃣ Instalar APK no Emulador
```sh
adb install C:\projetos\app\apk\VodQA.apk
```
Ou navegue até a pasta e execute:
```sh
cd C:\projetos\app\apk
adb install VodQA.apk
```

### 8️⃣ Verificar a Versão do Android e Chrome
```sh
adb shell getprop ro.build.version.release
adb shell dumpsys package com.android.chrome | findstr versionName
```

## 🔧 Configuração do WebdriverIO (Capabilities)
Arquivo `wdio.conf.js`:
```json
{
  "platformName": "Android",
  "deviceName": "Pixel_6_API_34",
  "automationName": "UiAutomator2",
  "appPackage": "com.vodqareactnative",
  "appActivity": "com.vodqareactnative.MainActivity",
  "noReset": true
}
```
Para descobrir o nome do pacote e a activity do app:
```sh
adb shell pm list packages | findstr "appium"
adb shell dumpsys window | findstr mCurrentFocus
adb shell dumpsys activity activities | findstr "mResumedActivity"
```

### 🔍 Testando a Conexão com o Appium
```sh
Invoke-WebRequest -Uri "http://127.0.0.1:4723/wd/hub/session" -Method Post -Headers @{"Content-Type"="application/json"} -Body (Get-Content -Raw capabilities.json)
```
Ou execute diretamente os testes:
```sh
npx wdio run wdio.conf.js
```

### 🎯 Identificação de Elementos com Appium Inspector
Configurar Appium Inspector:
- **Remote Host**: 127.0.0.1
- **Remote Port**: 4723
- **Remote Path**: /wd/hub

Capabilities:
```json
{
  "platformName": "Android",
  "appium:deviceName": "Pixel_6_API_34",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.vodqareactnative",
  "appium:appActivity": "com.vodqareactnative.MainActivity",
  "appium:noReset": true
}
```

---

## 🌎 Integração com BrowserStack
### 1️⃣ Adicionar Credenciais ao `wdio.conf.js`
```js
services: ['browserstack'],
user: process.env.BROWSERSTACK_USERNAME,
key: process.env.BROWSERSTACK_ACCESS_KEY,
capabilities: [{
    platformName: "Android",
    "appium:deviceName": "Google Pixel 6",
    "appium:platformVersion": "12.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": "bs://08a17866d26d781a7b92efdf06933aff2fc6aecf",
    "bstack:options": {
        projectName: "VodQA",
        buildName: "Teste WebdriverIO",
        sessionName: "Primeiro Teste"
    }
}]
```

### 2️⃣ Instalar o serviço do BrowserStack
```sh
npm install wdio-browserstack-service --save-dev
```

### 3️⃣ Executar os Testes na Nuvem
```sh
BROWSERSTACK_USERNAME=rodrigodias_lR4iP9 BROWSERSTACK_ACCESS_KEY=b8HCbbsyyhRXKEDmys95 npx wdio run wdio.conf.js
```
Ou apenas:
```sh
npx wdio wdio.conf.js
```

---

## 📜 Relatórios de Teste
Os relatórios podem ser gerados com Allure ou HTML Report.

Para instalar o Allure:
```sh
npm install @wdio/allure-reporter --save-dev
```

Para visualizar os relatórios:
```sh
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## 🏁 Conclusão
Este projeto cobre a configuração e execução de testes automatizados mobile com WebdriverIO, Appium e integração com BrowserStack. Siga os passos acima para rodar os testes com sucesso!

🚀 **Happy Testing!**

