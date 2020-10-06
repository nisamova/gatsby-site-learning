import React from "react"
import { Helmet }from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


export const Seo = ({ title, description, keywords, image, url }) =>{
    return ( 
        <StaticQuery
            query={detailsQuery}
            render={ data=> {
                const metaTitle = title || data.site.siteMetadata.title
                const metaDescription = description || data.site.siteMetadata.description
                const metaKeywords = keywords || data.site.siteMetadata.keywords
                const metaImage = image || data.site.siteMetadata.image
                const metaUrl = url || data.site.siteMetadata.url

                    return(
                        < Helmet 
                        title={title}
                        meta={[
                            {
                                name:`description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content:metaTitle,
                            },
                            {
                                property: `og:description`,
                                content:metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:image`,
                                content:metaImage,
                            },
                            {
                                property: `og:url`,
                                content:metaUrl,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0
                              ? {
                                  name: `keywords`,
                                  content: metaKeywords.join(`, `),
                                }
                              : []
                          )}
                        />
                      )
                    }}
                  />
                )
              }
              
              const detailsQuery = graphql`
                query DefaulySEOQuery {
                  site {
                    siteMetadata {
                      title
                      description
                      keywords
                      image
                    }
                  }
                }
              `
              