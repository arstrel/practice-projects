import React from 'react'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'
import { App, Whoops404 } from './components'
import SkiDayCount from './components/containers/SkiDayCount'
import AddDayForm from './components/containers/AddDayForm'
import SkiDayList from './components/containers/SkiDayList'

const routes = (
    <HashRouter >
        <Route path="/" component={App}>
            <Route exact path="/" component={SkiDayCount}/>
            <Route path="add-day" component={AddDayForm}/>
            <Route path="list-days" component={SkiDayList}>
                <Route path=":filter" component={SkiDayList}/>
            </Route>
        <Route path="*" component={Whoops404}/>
        </Route>
    </HashRouter>
)

export default routes 