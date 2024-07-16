import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
import EventHandling from '../EventHandling/EventHandling';
import EventFunctionProps from '../EventHandling/EventFunctionProps';
import LifecycleComponent from '../ReactLifeCycle/ReactLifeCycle';

const HomeComponent = () => {
  const productData = [
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The secret of beauty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam est. Sed et quam est.",
    },

    {
      imgUrl:
        "https://images.unsplash.com/photo-1598528738936-c50861cc75a9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best Beauty Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam est. Sed et quam est.",
    },
  ];
  return (
    <>
      {/* <CardComponent data={productData} /> */}
      {/* <EventFunctionProps /> */}
      <LifecycleComponent />
    </>
  )
}

export default HomeComponent