import {gql} from "@apollo/client";

//LASTYEAR
export const LASTYEAR = gql`
    query GetPosts($last3months: [String] $lastyear: String) {
        axomefacts( pagination: { limit: 100 }, filters: { Annee: {eq: $lastyear}, Mois: {in: $last3months }}, sort: "createdAt:desc" ) {
            data {
                id
                attributes {
                    Texte,
                    Mois,
                    Annee
                }
            }
        }
    }
`;

//ALLFACTS
export const ALLFACTS = gql`
    query GetPosts {
        axomefacts(pagination: { limit: 100 }, sort: "createdAt:desc") {
            data {
                id
                attributes {
                    Texte,
                    Mois,
                    Annee
                }
            }
        }
    }
`;

//HOMEPAGE
export const HOME = gql`
    query GetPosts($year: String) {
        axomefacts( pagination: { limit: 100 }, filters: { Annee: {eq: $year}, Mois: {eq: "Septembre" }}, sort: "createdAt:desc" ) {
            data {
                id
                attributes {
                    Texte,
                    Mois,
                    Annee
                }
            }
        }
    }
`;