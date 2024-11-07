`<title>` must be a direct child of `<Head>`
Components inside `<Head>` cannot be tested via snapshot test.
That is why they are moved inside another component
(except `<title>`).
