import React from 'react'
import Layout from '../components/Layout'
import type { HeadFC } from "gatsby";
import HeadData from "../components/HeadData";

type Props = {}

export default function Contact({}: Props) {
  return (
    <div>
      <Layout>
        Contacts
      </Layout>
    </div>
  )
}

export const Head: HeadFC = function () {
  return <HeadData title="Contact" />;
};