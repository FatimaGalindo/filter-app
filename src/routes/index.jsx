import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import Style from './../config/Style';
import Layout from './../components/Layout'
import { Router } from '@reach/router'
const Filtro = lazy(() =>  import('../pages/Filtro'))

const Route = () => {
  return (
    <Layout>
      <Style/>
      <Suspense fallback={<>Cargando</>}>
        <Router>
        <Filtro path='/' />
        </Router>
      </Suspense>
    </Layout>
  )
}


export default Route





