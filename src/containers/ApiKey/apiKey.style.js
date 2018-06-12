import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "../../settings/withDirection";

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;
  .nnApiKeyTable {
    table {
      tbody {
        tr {
          td {
            .nnApiKeyBtnView {
              display: flex;
              flex-direction: row;
              opacity: 0;
              > a {
                margin: ${props =>
                  props["data-rtl"] === "rtl" ? "0 0 0 15px" : "0 15px 0 0"};
              }
            }
          }
          &:hover {
            .nnApiKeyBtnView {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .nnApiKeyTableBtn {
    display: flex;
    margin-top: 20px;
    a {
      margin-left: auto;
    }
  }

  .apiKeyListTable {
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      &:hover {
        background-color: ${palette("secondary", 1)};
      }
    }

    .apiKeyViewBtn {
      color: ${palette("text", 3)};

      &:hover {
        color: ${palette("primary", 0)};
      }
    }

    .apiKeyDltBtn {
      border: 0;
      color: ${palette("text", 1)};

      &:hover {
        border: 0;
        color: ${palette("primary", 0)};
      }
    }
  }
`;

export default WithDirection(CardWrapper);
