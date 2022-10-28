import React from "react";

export default function ProductDetails() {
  return (
    <div className="container-fluid">
      <h1>hi this is ProductDetails</h1>

      <div className="p-3 border mx-auto w-50">
        this is some info about this page.
      </div>

      <div className="container">
        <dl class="row">
          <dt class="col-2">Currency</dt>
          <dd class="col-10">USD</dd>
          <dt class="col-2">Rate that is as of today</dt>
          <dd class="col-10">$21.11</dd>
          <dt class="col-2">Usage</dt>
          <dd class="col-10">Global</dd>
          <dt class="col-2">Ask</dt>
          <dd class="col-10">NotMe</dd>
        </dl>
      </div>

      <div className="container">
        <button type="button" class="btn btn-primary" disabled>
          Click Me
        </button>
      </div>
      <div className="container">
        <button type="button" class="btn btn-outline-primary">
          Primary
        </button>
      </div>

      <div className="container text-center">
        <div className="row gx-4">
          <div className="col-lg-6 col-md-3 bg-info">Column1</div>
          <div className="col-lg-6 col-md-3 bg-info">Column2</div>
        </div>
      </div>

      <div className="container text-center">
        <div
          className="row align-items-center border border-success"
          style={{ height: "100px" }}
        >
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col ">One of three columns</div>
        </div>
        <div
          className="row align-items-center border border-success"
          style={{ height: "50px" }}
        >
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
        <div className="row align-items-end border border-success">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
      </div>
    </div>
  );
}
