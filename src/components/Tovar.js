import React from 'react';

const Tovar = () => {
    return (
        <section className="tovar">
            <div className="container tovar_content">
                <div className="row">
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img src="/images/shorts.png" className="w-100" alt="" />
                        </div>
                        <h5>T-shorts & tees</h5>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            img src="/images/sportuvka.png" className="w-100" alt="" />
                        </div>
                        <h5>Outerwear</h5>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img src="/images/track.png"  className="w-100"alt="" />
                        </div>
                        <h5>Track Pants</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tovar;