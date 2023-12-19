# Fast React Pizza 🍕 ([Live Server](https://fast-react-pizza-eight-gamma.vercel.app/))

> Pick pizza you want, make order and track progress!


![Fast-React-Pizza-Co-Welcome](https://github.com/AbdelrahmanTolba/Fast-React-Pizza/assets/90225424/e9ead9f2-e995-4be3-a8fd-a9a7e61fab83)


### Build with

- [React](https://react.dev)
- [Tailwindcss](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Hosted by Vercel](https://www.vercel.com)

React third-party packeges:

- [React Router](https://reactrouter.com/en/main)
- [React Redux](https://react-redux.js.org/)

# Getting Started

1. **_Clone the repository_**

```sh
$ git clone https://github.com/AbdelrahmanTolba/Fast-React-Pizza.git
```

2. **_Navigate to repository directory_**

```sh
$ cd Fast-React-Pizza
```

3. **_Install dependencies_**

```sh
$ npm install
```

3. **_Run Localy_**

```sh
$ npm run dev
```


# Features:

- Add pizza to cart, choose quantity of each.

  ![Fast-React-Pizza-Co-Add-pizza](https://github.com/AbdelrahmanTolba/Fast-React-Pizza/assets/90225424/eb160123-8f3c-4a2b-92ca-7f9ff97abe4b)

- Track what you already have in cart.

![Fast-React-Pizza-Co-cart](https://github.com/AbdelrahmanTolba/Fast-React-Pizza/assets/90225424/988ecabd-43aa-483f-98ff-cc0abd2212e9)

  
- Make order by complete form with phone, address **(possible to use geolocation)**.

![Fast-React-Pizza-Co-Form](https://github.com/AbdelrahmanTolba/Fast-React-Pizza/assets/90225424/f740124e-ee46-434a-bd72-de190f27d304)

  
- Add order to priority queue by paying extra money.
  
![Fast-React-Pizza-Co-Pariority](https://github.com/AbdelrahmanTolba/Fast-React-Pizza/assets/90225424/df92cc26-efc4-41fa-a92e-4a0fbaf36b30)

- Searching on order by Id

  ![Fast-React-Pizza-Co-Order](https://github.com/AbdelrahmanTolba/Fast-React-Pizza/assets/90225424/a40201ec-877d-4fcc-80db-3082a8ff2bcf)

  
- No payment processing.

# Tech Features:

- Application uses backend service to fetch and post data (remote state).
- That remote state manage by react router data loading feature ("rendre as you fetch") and router action to post data to remote api.
- Global UI state manage be redux-toolkit, split global state on slices.
- Styling: Tailwindcss, responsive design (mobile first).
