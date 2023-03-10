import React, { useEffect, useState } from 'react';
import { Badge, Table } from "react-bootstrap";
import './Dash.css';
import SideBar from "./SideBar";
import {  GetAllUsers } from "../../apis/UserApi";
import { GetAllOff } from '../../apis/OfferApi';

const Dashboard = () => {
  const [allusers,setAllusers]= useState([]);
  const [alloffers, setAlloffers] = useState([]);

  const isOffers = async () => {
    const uslg = await GetAllOff();
    setAlloffers(uslg);
  };

  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

  const Count = ()=>{
    var nbr = 0;
    
      allusers.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbruser= Count()

  const clt = ()=>{
    var nbr = 0;
    
    alloffers.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbrclt= clt()

  useEffect(()=>{
    isUsers();
    isOffers();
   
  },[allusers.length])
  console.log(allusers);
  return (
    <div>
      {/* Navbar */}
<SideBar/>
      {/* Content Wrapper. Contains page content */} 
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Admin Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="conteknt">
          <div className="container-fluid">
            {/* Info boxes */}
            <div className="bad row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-user-plus" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">All Users</span>
                    <span className="info-box-number">
                      {nbruser}
                      
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                <span className="info-box-icon bg-success elevation-1">
                  <i className="fas fa-shopping-cart" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Products</span>
                    <span className="info-box-number">{nbrclt}</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              {/* fix for small devices only */}
              <div className="clearfix hidden-md-up" />
              
              {/* /.col */}
            
              {/* /.col */}
            </div>
            {/* /.row */}
           
            {/* /.row */}
            {/* Main row */}
            <div className="baddd row">
              {/* Left col */}
              <div className="col-md-5">
              
            
                {/* /.row */}
                {/* TABLE: LATEST ORDERS */}
                <div className="card aa">
                  <div className="card-header cdh border-transparent">
                    <h3 className="card-title">All Users</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body cdb p-0">
                    <div className="table-responsive">
                      <Table className="table m-0">
                        <thead className="txt">
                          
                          <tr>
                           
                            <th>Name</th>
                            
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody className="txt">
                        {allusers.filter((el)=>el.isAdmin!=true).map((el)=>(
                          <tr>
                           
                            <td>{el.username}</td>
                            
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                               {el.email}
                              </div>
                            </td>
                          </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                    {/* /.table-responsive */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer cdf clearfix">
                    
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* Info Boxes Style 2 */}
               
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>

      

      



      {/* /.content-wrapper */}
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
      {/* Main Footer */}<br/>
    
    </div>
  )
}

export default Dashboard