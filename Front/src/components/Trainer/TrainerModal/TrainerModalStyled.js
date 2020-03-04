import styled from 'styled-components';

const TrainerModalStyled = styled.div`
  padding: .5em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .modal-header {
    height: 5%;
    border-bottom: 1px solid black;
    padding-bottom: .5em;
    h1 {
      text-align: center;
    }
  }
  .modal-content {
    display: flex;
    padding-top: .5em;
    width: 100%;
    height: 95%;
    .wrapper-left {
      display: flex;
      flex-direction: column;
      margin-right: .5em;
      width: 70%;
      height: 100%;
      .trainer {
        display: flex;
        height: calc(100% / (10/3));
        width: 100%;
        .table-container  {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: auto;
          /* scrollbar hidden (IE/Edge) */
          -ms-overflow-style: none;
          /* scrollbar hidden (Chrome/Firefox/Safari) */
          &::-webkit-scrollbar {
            display: none;
          }
          & table {
            margin-left: .5em;
          }
          & td {
            line-height: 1.2em;
            padding-right: .5em;
            &:nth-child(2) {
              word-break: break-word;
            }
          }
        }
        .trainer-avatar {
          height: 100%;
          width: 20%;
          padding: .5em;
          background-color: lightblue;
          margin-right: .5em;
          border-radius: 10px;
          box-shadow: lightgrey 0 0 5px;
          .trainer-avatar-container {
            overflow: hidden;
            height: 100%;
            width: 100%;
            border-radius: 8px;
            .modal-trainer-avatar {
              width: 100%;
              object-position: 50% 50%;
              objet-fit: cover;
            }
          }
        }
        .trainer-description {
          display: flex;
          width: 80%;
          height: 100%;
          .trainer-description-infos {
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 100%;
            margin-right: .5em;
            .trainer-description-infos-basics {
              height: 50%;
              background-color: lightblue;
              margin-bottom: .5em;
              padding: .5em;
              /* box-shadow: inset 2px 2px 5px grey; */
              border-radius: 10px;
              box-shadow: lightgrey 0 0 5px;
              color: white;
              font-size: 1.5em;
            }
            .trainer-description-infos-team {
              height: 50%; 
              background-color: lightgray;
              border-radius: 10px;
              box-shadow: lightgrey 0 0 5px;
              .team-container {
                height: 100%;
                width: 100%;
                display: flex;
                border-radius: 8px;
                .pokemon {
                  height: 100%;
                  width: calc(100% / 7);
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    height: 100%;
                    object-position: 50% 50%;
                    objet-fit: cover;
                  }
                  &.empty {
                    img {
                      height: 100%;
                      transform: rotate(15deg);
                      opacity: .1;
                    }
                  }
                }
              }
            }
          }
          .trainer-description-appearance {
            display: flex;
            align-items: center;
            background-color: lightblue;
            width: 50%;
            height: 100%;              
            padding:.5em;
            border-radius: 10px;
            box-shadow: lightgrey 0 0 5px;
            color: white;
            font-size: 1.5em;
            .table-container {
              width: 75%;
            }
            .trainer-sprite {
              width: 25%;
              img {
                transform: scale(1.5);
              }
            }
          }
        }
      }
      .stats {
        height: calc(100% / 2.5);
        width: 100%;
        margin: .5em 0;
        display: flex;
        .stats-stat {
          background-color: lightgreen; 
          border-radius: 10px;
          box-shadow: lightgrey 0 0 5px;
          height: 100%;
          width: calc((100% / 3) - .25em);
          padding: .5em;
          .stat-container {
            width: 100%;
            height: 100%;
            .stat {
              height: calc(100% / 6);
              span {
                margin-bottom: .2em;
              }
            }
          }      
        }
        .stats-skills {
          background-color: lightgreen; 
          height: 100%;
          width: calc((100% / 3) * 2);
          margin-left: .5em;
        }
      }
      .text {
        height: calc(100% / (10/3));
        width: 100%;
        display: flex;
        .text-background {
          background-color: lightcoral; 
          width: calc(100% / 3);
          height: 100%;
        }
        .text-history {
          background-color: lightcoral; 
          height: 100%;
          width: calc(100% / 3);
          height: 100%;
          margin: 0 .5em;
        }
        .text-notes {
          background-color: lightcoral; 
          height: 100%;
          width: calc(100% / 3);
          height: 100%;
        }
      }
    }

    .wrapper-right {
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      .spendables {
        background-color: lightblue;
        height: calc(100% / 14);
        margin-bottom: .5em;
      }
      .inventory {
        height: calc(100% - (100% / 14));
        width: 100%;
        display: flex;
        flex-direction: column;
        .inventory-nav {
          background-color: coral;
          height: calc(100% / 14);
          width: 100%;
        }
        .inventory-content {
          background-color: lightcoral;
          height: calc(100% - (100% / 14));
          width: 100%;
          .inventory-item {
           
          }
        }
      }
    }
  }
  
`;

export default TrainerModalStyled;
