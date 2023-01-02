import React from "react";
import Header from "../components/Header";
import "./styles/layout.css";

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />

      <main className="content">{children}</main>

      <footer>
        <p>Copyright 2022 Meder Taab</p>
      </footer>
    </div>
  );
}
