import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanetaryApod();
    }, [store.start_date, store.end_date])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center text-uppercase text-warning'>photos</h1>
                    </div>
                    <div className="col-md-12">
                        <p>
                            Total photos: {store.photos !== null && store.photos.reduce((total, photo) => photo.media_type === 'image' ? total + 1 : total + 0, 0)}
                        </p>
                        <p>
                            Total videos: {store.photos !== null && store.photos.reduce((total, photo) => photo.media_type === 'video' ? total + 1 : total + 0, 0)}
                        </p>
                    </div>
                    <div className="col-md-6">
                        Start Date: <input type="date" name="start_date" value={store.start_date} onChange={actions.handleChangeDate} />
                    </div>
                    <div className="col-md-6">
                        End Date: <input type="date" name="end_date" value={store.end_date} onChange={actions.handleChangeDate} />
                    </div>
                </div>
                <div className="row">
                    {
                        store.photos !== null &&
                        store.photos.length > 0 &&
                        store.photos.map((photo, index) => {
                            return (
                                <div className="col-md-6" key={index}>
                                    <div className="card my-2">
                                        {
                                            photo.media_type === 'video' ? (
                                                <iframe width="100%" height="400"
                                                    src={photo.url}
                                                    title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe>
                                            ) : (
                                                <img src={photo.url} alt="" className="img-fluid" height="350" />
                                            )
                                        }
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                {photo.title}
                                            </h4>
                                            <p className="card-text text-truncate" style={{ "maxHeight": "200px" }}>
                                                {photo.explanation}
                                            </p>
                                            <p className='card-text'>
                                                Date:{photo.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home;