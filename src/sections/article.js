import React, { Component } from 'react'

/*
 * No posee state y no posee metodos del ciclo de vida
 * Se puede pasar a un component puro ("state less component")
 */
/*class Article extends Component{
  render(){
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por:</em> {this.props.author}</p>
        <date>{this.props.date}</date>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
}*/

// stateless component
const Article = (props) =>(
  <section>
    <h2>{props.title}</h2>
    <p><em>Escrito por:</em> {props.author}</p>
    <date>{props.date}</date>
    <article>
      {props.children}
    </article>
  </section>
)

Article.defaultProps = {
  title: 'cuentos de los hermanos grimm'
}

export default Article
