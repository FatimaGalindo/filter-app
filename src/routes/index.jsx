import React, { lazy, Suspense } from 'react'
import Style from './../config/Style';
import Layout from './../components/Layout2'
import Loading from './../components/Loading'
import { Router } from '@reach/router'
const Filtro = lazy(() =>  import('../pages/Filtro'))

const Route = () => {
  return (
    <Layout>
      <Style/>
      <Suspense fallback={ <Loading />}>
        <Router>
        <Filtro path='/' />
        </Router>
      </Suspense>
    </Layout>
  )
}


export default Route





