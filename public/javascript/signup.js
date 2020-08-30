async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const res2 = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (res2.ok) {
                document.location.replace('/dashboard');
            }
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);