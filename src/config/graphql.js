import {gql} from "@apollo/client";


//LASTYEAR
export const LASTYEAR = gql`
#    query GetPosts($month1: String, $month3: String, $month3: String, $year: String) {
    query GetPosts($last3months: [String] $year: String) {
        axomefacts( pagination: { limit: 100 }, filters: { Annee: {eq: $year}, Mois: {in: $last3months }}, sort: "createdAt:asc" ) {
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
        axomefacts(pagination: { limit: 100 }) {
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
    query GetPosts($month: String, $year: String) {
        axomefacts( pagination: { limit: 100 }, filters: { Annee: {eq: $year}, Mois: {eq: $month }} ) {
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