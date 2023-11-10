# Fast React Pizza 🍕 ([Live Server](https://fast-react-pizza-eight-gamma.vercel.app/))

> Pick pizza you want, make order and track progress!

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
- Track what you already have in cart.
- Make order by complete form with phone, address **(possible to use geolocation)**.
- Add order to priority queue by paying extra money.
- No payment processing.

# Tech Features:

- Application uses backend service to fetch and post data (remote state).
- That remote state manage by react router data loading feature ("rendre as you fetch") and router action to post data to remote api.
- Global UI state manage be redux-toolkit, split global state on slices.
- Styling: Tailwindcss, responsive design (mobile first).
