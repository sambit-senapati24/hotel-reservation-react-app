import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "Free Cocktails",
                    info: "Nisi laboris voluptate incididunt dolor occaecat Lorem minim anim."

                },
                {
                    icon: <FaHiking />,
                    title: "Endless Hiking",
                    info: "Nisi laboris voluptate incididunt dolor occaecat Lorem minim anim."

                },
                {
                    icon: <FaShuttleVan />,
                    title: "Free Shuttle",
                    info: "Nisi laboris voluptate incididunt dolor occaecat Lorem minim anim."

                },
                {
                    icon: <FaBeer />,
                    title: "Strongest beer",
                    info: "Nisi laboris voluptate incididunt dolor occaecat Lorem minim anim."

                }
            ]
        }
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (<article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>

                            );
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Services
