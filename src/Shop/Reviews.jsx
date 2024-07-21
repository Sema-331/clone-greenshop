import React from 'react'
import { useSelector } from 'react-redux'

const Reviews = () => {

    const loading = useSelector((item) => item.products.loading)

  return (
    <section>
        <div className="container">
            <div className="rew__block">
                <h2 className="rew__main-header">Reviews: </h2>
                <div className="rew__block-videos">
                    <div className='rew__block-inside'>
                        <div className='rew__block-main-video-content'>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/4Twepz0bAWs?si=kQ1UJc9vR7Flinhz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='rew__block-description-videos'>
                            <h2 className='rew__block-rewiews-header'>General overview</h2>
                            <p className="rew__description-rewievs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tenetur nulla eum nisi odit harum sequi libero, sapiente cumque, impedit accusamus in. Consequuntur at optio, ipsum officiis deserunt ut reprehenderit?
                            Repudiandae nobis eveniet incidunt excepturi non perferendis aut nisi eos magni. Minima, ab eius, cumque mollitia, laborum pariatur in impedit deleniti harum dolores quaerat atque accusantium facilis! Voluptatibus, impedit vel.
                            Accusamus non officiis sunt blanditiis quidem aut at assumenda fugiat natus commodi? Exercitationem perferendis nesciunt, accusantium voluptate numquam, blanditiis cumque distinctio quidem, molestiae magni repellat fuga illo deserunt commodi impedit?</p>
                        </div>
                    </div>
                    <div className='rew__block-inside'>
                        <div className='rew__block-main-video-content'>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=WgxWzNrnCMuot3Ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='rew__block-description-videos'>
                            <h2 className='rew__block-rewiews-header'>Overwiew product</h2>
                            <p className="rew__description-rewievs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tenetur nulla eum nisi odit harum sequi libero, sapiente cumque, impedit accusamus in. Consequuntur at optio, ipsum officiis deserunt ut reprehenderit?
                            Repudiandae nobis eveniet incidunt excepturi non perferendis aut nisi eos magni. Minima, ab eius, cumque mollitia, laborum pariatur in impedit deleniti harum dolores quaerat atque accusantium facilis! Voluptatibus, impedit vel.
                            Accusamus non officiis sunt blanditiis quidem aut at assumenda fugiat natus commodi? Exercitationem perferendis nesciunt, accusantium voluptate numquam, blanditiis cumque distinctio quidem, molestiae magni repellat fuga illo deserunt commodi impedit?</p>
                        </div>
                    </div>
                    <div className='rew__block-inside'>
                        <div className='rew__block-main-video-content'>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/l_7e2ZamUpI?si=v817UVqGWmxAcfwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='rew__block-description-videos'>
                            <h2 className='rew__block-rewiews-header'>Overwiew about</h2>
                            <p className="rew__description-rewievs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tenetur nulla eum nisi odit harum sequi libero, sapiente cumque, impedit accusamus in. Consequuntur at optio, ipsum officiis deserunt ut reprehenderit?
                            Repudiandae nobis eveniet incidunt excepturi non perferendis aut nisi eos magni. Minima, ab eius, cumque mollitia, laborum pariatur in impedit deleniti harum dolores quaerat atque accusantium facilis! Voluptatibus, impedit vel.
                            Accusamus non officiis sunt blanditiis quidem aut at assumenda fugiat natus commodi? Exercitationem perferendis nesciunt, accusantium voluptate numquam, blanditiis cumque distinctio quidem, molestiae magni repellat fuga illo deserunt commodi impedit?</p>
                        </div>
                    </div>
                    <div className='rew__block-inside'>
                        <div className='rew__block-main-video-content'>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/9UMxZofMNbA?si=0CtrUB9hLKG3pI6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='rew__block-description-videos'>
                            <h2 className='rew__block-rewiews-header'>Overwiew all</h2>
                            <p className="rew__description-rewievs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tenetur nulla eum nisi odit harum sequi libero, sapiente cumque, impedit accusamus in. Consequuntur at optio, ipsum officiis deserunt ut reprehenderit?
                            Repudiandae nobis eveniet incidunt excepturi non perferendis aut nisi eos magni. Minima, ab eius, cumque mollitia, laborum pariatur in impedit deleniti harum dolores quaerat atque accusantium facilis! Voluptatibus, impedit vel.
                            Accusamus non officiis sunt blanditiis quidem aut at assumenda fugiat natus commodi? Exercitationem perferendis nesciunt, accusantium voluptate numquam, blanditiis cumque distinctio quidem, molestiae magni repellat fuga illo deserunt commodi impedit?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews