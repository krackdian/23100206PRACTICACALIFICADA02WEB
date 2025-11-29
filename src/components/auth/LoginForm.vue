<template>
<div class="login-container">
<h2>Login</h2>
<form @submit.prevent="handleLogin">
<label>Email</label>
<input type="email" v-model="email" required />


<label>Password</label>
<input type="password" v-model="password" required />


<button type="submit">Ingresar</button>
<p class="error" v-if="error">{{ error }}</p>
</form>
</div>
</template>


<style>
.login-container {
width: 320px;
margin: 40px auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 8px;
font-family: Arial, sans-serif;
}


input {
width: 100%;
padding: 8px;
margin: 8px 0 16px 0;
border: 1px solid #ccc;
border-radius: 4px;
}


button {
width: 100%;
padding: 10px;
border: none;
background: #007bff;
color: white;
border-radius: 4px;
cursor: pointer;
}


.error {
margin-top: 10px;
color: red;
}
</style>


<script>
export default {
data() {
return {
email: "",
password: "",
error: ""
};
},
methods: {
async handleLogin() {
this.error = "";
try {
const res = await fetch("https://storedb-api.onrender.com/node-api/users/signin", {
method: "POST",
headers: {
"Content-Type": "application/json",
accept: "*/*"
},
body: JSON.stringify({ email: this.email, password: this.password })
});


const data = await res.json();


if (!res.ok) {
this.error = data.message || "Credenciales incorrectas";
return
}


console.log("Login exitoso", data);
this.$router.push("/listcard");
} catch {
this.error = "Error al conectar con el servidor";
}
}
}
};
</script>