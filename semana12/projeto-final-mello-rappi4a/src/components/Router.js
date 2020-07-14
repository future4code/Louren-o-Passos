import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";

import CartPage from "./CartPage/index";
import EditAddressPage from "./EditAddressPage/index";
import EditProfilePage from "./EditProfilePage/index";
import FeedPage from "./FeedPage/index";
import LoginPage from "./LoginPage/index";
import ProfilePage from "./ProfilePage/index";
import RestaurantPage from "./RestaurantPage/index";
import SearchPage from "./SearchPage/index";
import SignUpAddressPage from "./SignUpAddressPage/index";
import SignUpPage from "./SignUpPage/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cart">
          <DocumentTitle title="Carrinho">
            <CartPage />
          </DocumentTitle>
        </Route>

        <Route exact path="/edit-address">
          <DocumentTitle title="Editar endereço">
            <EditAddressPage />
          </DocumentTitle>
        </Route>

        <Route exact path="/edit-profile">
          <DocumentTitle title="Editar perfil">
            <EditProfilePage />
          </DocumentTitle>
        </Route>

        <Route exact path="/feed">
          <DocumentTitle title="Home">
            <FeedPage />
          </DocumentTitle>
        </Route>

        <Route exact path="/">
          <DocumentTitle title="Login">
            <LoginPage />
          </DocumentTitle>
        </Route>

        <Route exact path="/profile">
          <DocumentTitle title="Seu perfil">
            <ProfilePage />
          </DocumentTitle>
        </Route>

        <Route exact path="/restaurant">
          <DocumentTitle title="Restaurante">
            <RestaurantPage />
          </DocumentTitle>
        </Route>

        <Route exact path="/search">
          <DocumentTitle title="Buscar">
            <SearchPage />
          </DocumentTitle>
        </Route>

        <Route exact path="/signup-address">
          <DocumentTitle title="Cadastrar endereço">
            <SignUpAddressPage />
          </DocumentTitle>
        </Route>

        <Route exact path="/signup">
          <DocumentTitle title="Cadastro">
            <SignUpPage />
          </DocumentTitle>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
