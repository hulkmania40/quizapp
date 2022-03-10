import React from 'react'
import './NoMatch.css'

export default function NoMatch() {
  return (
    <>
      <h1>404 Error Page #2</h1>
      <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
      <section class="error-container">
        <span class="four"><span class="screen-reader-text">4</span></span>
        <span class="zero"><span class="screen-reader-text">0</span></span>
        <span class="four"><span class="screen-reader-text">4</span></span>
      </section>
      <div class="link-container">
        <a href="/" class="more-link">HomePage</a>
      </div>
    </>
  )
}
