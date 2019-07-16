import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { Login, Page404 } from './Pages';
// import firebase from './Config/Firebase/firebase'
// import { connect } from 'react-redux';
// import { getUserRole, logOut } from './store/Actions/action'
import Loader from './assets/img/loader.gif'
import history from './history'
// import publicIp from 'public-ip'
//***************Agent Route*******************/
import { AllSellDefault, TodaySellDefault, NewDealDefault, DashboardDefault, PendingDefault, TransferDefault, CallBackDefault } from './agent'

//***************Admin Routes*******************/
import { AllSellDefaultAdmin, TodaySellDefaultAdmin, DashboardDefaultAdmin, RegisterDefault, EditUserDefault } from './admin'


//***************Closer Routes*******************/
import { DashboardDefaultCloser, NewDealDefaultCloser, TodaySellDefaultCloser, AllSellDefaultCloser, PendingDefaultCloser, TransferDefaultCloser, CallBackDefaultCloser } from './closer'
import SignUp from './Pages/Login/Signup';
// import admin from 'firebase-admin-auth';
// import serviceAccount from './admin/Register/genesis-7c1cc-firebase-adminsdk-n4z95-4ade82680a'

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://genesis-7c1cc.firebaseio.com"
// });

// function PrivateRoute({ component: Component, authed, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
//     />
//   )
// }

// function PublicRoute({ component: Component, authed, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === false
//         ? <Component {...props} />
//         : <Redirect to='/dashboard' />}
//     />
//   )
// }

class MainRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authed: false,
      user: "",
      loader: true
    }
    this.userCheck = this.userCheck.bind(this)
  }
  // componentDidMount() {
  //   let that = this
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       that.setState({
  //         authed: true,
  //         user: user
  //       })
  //     } else {
  //       that.setState({
  //         authed: false
  //       })
  //     }
  //   });
  // }
  componentWillMount() {
    // this.props.getUserRole();
  }

  userCheck(fruit) {
    console.log("Chekingg===>",fruit)
    if (fruit.uid === this.state.user.uid) {
      return fruit.uid === this.state.user.uid;
    }
    else {
      return fruit.uid === this.state.user.uid;
    }
  }
  render() {
    // firebase.database().ref("blacklist").child(`${this.state.user.uid}`).on('value', (user) => {
    //   if (user.val() === true) {
    //     this.props.logOut()
    //   }
    // })
    console.log('User',this.props.admins)
    return (
      this.props.mainLoader === true ?
        <div className="loader">
          <img src={Loader} alt="" width="300" />

        </div>
        :
        <Router>
          <Switch>
         {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ADMIN WORKING ROUTES WITH NODES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
         
         <Route exact path="/all-users" component={EditUserDefault} />
         <Route exact path="/today-sales" component={TodaySellDefaultAdmin} />
         <Route exact path="/all-sale" component={AllSellDefaultAdmin}/>
         <Route exact path="/register" component={RegisterDefault} />
        <Route exact path="/adminDashboard" component={DashboardDefaultAdmin}/> 
       
         {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CLOSER WORKING ROUTES WITH NODES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
         <Route  path="/" exact component={Login}/> 
        {/* <Route  exact   path="/dashboard1" component={DashboardDefaultCloser} />
        <Route  exact   path="/new-sale" component={NewDealDefaultCloser}/>
        <Route  exact   path="/today-sales" component={TodaySellDefaultCloser}/>
        <Route  exact   path="/all-sale" component={AllSellDefaultCloser}/>
        <Route  exact   path="/pending" component={PendingDefaultCloser}/>
        <Route  exact   path="/transfer" component={TransferDefaultCloser}/>
      <Route  exact   path="/call-back" component={CallBackDefaultCloser}/>  */}






      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> AGENT WORKING ROUTES WITH NODES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
  
                      <Route  path="/" exact component={Login}/> 
                    {/*  <Route exact path="/adminDashboard" component={DashboardDefaultAdmin} />
                      <Route exact path="/today-sales" component={TodaySellDefaultAdmin} />
                      <Route exact path="/register" component={RegisterDefault} />
                      <Route exact             path="/dashboard" component={DashboardDefault}  />
                      <Route exact             path="/new-sale" component={NewDealDefault}     />
                      
*/}

                      <Route  path="/signup" exKUact component={SignUp}/>  
                       {/*<Route exact             path="/dashboard" component={DashboardDefault}  />
                      <Route exact             path="/new-sale" component={NewDealDefault}     />
                      <Route exact             path="/today-sales" component={TodaySellDefault}/>
                      <Route exact             path="/all-sale" component={AllSellDefault}     />
                      <Route exact             path="/pending" component={PendingDefault}      />
                      <Route exact             path="/transfer" component={TransferDefault}    />
                      <Route exact             path="/call-back" component={CallBackDefault}   /> */}




            {/* <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
            {/* <PublicRoute authed={this.state.authed} path="/login" component={Login} /> */}
            {/* {typeof this.props.admins.find(this.userCheck) !== "undefined" ?
           
           //=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Admin<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
              <Switch>
                <PrivateRoute authed={this.state.authed} path="/dashboard"   component={DashboardDefaultAdmin} />
                <PrivateRoute authed={this.state.authed} path="/all-sale"    component={AllSellDefaultAdmin} />
                <PrivateRoute authed={this.state.authed} path="/today-sales" component={TodaySellDefaultAdmin} />
                <PrivateRoute authed={this.state.authed} path="/register"    component={RegisterDefault} />
                <PrivateRoute authed={this.state.authed} path="/all-users"   component={EditUserDefault} />
                <Route path="*" component={Page404} />
              </Switch>
              :
              typeof this.props.closers.find(this.userCheck) !== "undefined" ?
                //=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Closers<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                <Switch>
                  <PrivateRoute authed={this.state.authed} path="/dashboard" component={DashboardDefaultCloser} />
                  <PrivateRoute authed={this.state.authed} path="/new-sale" component={NewDealDefaultCloser} />
                  <PrivateRoute authed={this.state.authed} path="/today-sales" component={TodaySellDefaultCloser} />
                  <PrivateRoute authed={this.state.authed} path="/all-sale" component={AllSellDefaultCloser} />
                  <PrivateRoute authed={this.state.authed} path="/pending" component={PendingDefaultCloser} />
                  <PrivateRoute authed={this.state.authed} path="/transfer" component={TransferDefaultCloser} />
                  <PrivateRoute authed={this.state.authed} path="/call-back" component={CallBackDefaultCloser} />
                  <Route path="*" component={Page404} />
                </Switch>
                :
                typeof this.props.agents.find(this.userCheck) !== "undefined" ?
                  //=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Agent<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                  <Switch>
                    <PrivateRoute authed={this.state.authed} path="/dashboard" component={DashboardDefault}    />
                    <PrivateRoute authed={this.state.authed} path="/new-sale" component={NewDealDefault}        />
                    <PrivateRoute authed={this.state.authed} path="/today-sales" component={TodaySellDefault}    />
                    <PrivateRoute authed={this.state.authed} path="/all-sale" component={AllSellDefault}           />
                    <PrivateRoute authed={this.state.authed} path="/pending" component={PendingDefault}             />
                    <PrivateRoute authed={this.state.authed} path="/transfer" component={TransferDefault}           />
                    <PrivateRoute authed={this.state.authed} path="/call-back" component={CallBackDefault}           />
                    <Route path="*" component={Page404} />
                  </Switch>
                  :
                  history.push("/login")
            } */}
          </Switch>
        </Router>
    );
  }
}


// function mapStateToProp(state) {
//   return ({
//     admins: state.root.admins,
//     agents: state.root.agents,
//     closers: state.root.closers,
//     mainLoader: state.root.mainLoader,
//   })
// }
// function mapDispatchToProp(dispatch) {
//   return ({
//     getUserRole: () => { dispatch(getUserRole()) },
//     logOut: () => { dispatch(logOut()) }
//   })
// }


export default  MainRouter;
