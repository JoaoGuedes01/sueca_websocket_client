import React from 'react'

const SVG = (props) => {
    const type = props.type
    return (
        <>
            {
                type === 'logo' &&
                <svg width="258" height="49" viewBox="0 0 258 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62.07 35.0983C60.69 35.0983 59.38 34.8183 58.14 34.2583C56.92 33.6983 55.84 32.9283 54.9 31.9483C53.98 30.9483 53.26 29.7883 52.74 28.4683C52.22 27.1483 51.96 25.7183 51.96 24.1783C51.96 22.7183 52.22 21.3483 52.74 20.0683C53.26 18.7683 53.99 17.6283 54.93 16.6483C55.87 15.6683 56.97 14.8983 58.23 14.3383C59.49 13.7783 60.86 13.4983 62.34 13.4983C64.34 13.4983 66.05 13.9283 67.47 14.7883C68.91 15.6283 69.99 16.7483 70.71 18.1483L67.62 20.4283C67.08 19.3683 66.32 18.5583 65.34 17.9983C64.38 17.4383 63.33 17.1583 62.19 17.1583C61.29 17.1583 60.47 17.3483 59.73 17.7283C58.99 18.1083 58.35 18.6283 57.81 19.2883C57.27 19.9483 56.85 20.7083 56.55 21.5683C56.27 22.4283 56.13 23.3383 56.13 24.2983C56.13 25.3183 56.28 26.2583 56.58 27.1183C56.9 27.9783 57.34 28.7283 57.9 29.3683C58.48 30.0083 59.15 30.5183 59.91 30.8983C60.67 31.2583 61.51 31.4383 62.43 31.4383C63.51 31.4383 64.54 31.1583 65.52 30.5983C66.52 30.0383 67.45 29.2183 68.31 28.1383V32.2183C66.53 34.1383 64.45 35.0983 62.07 35.0983ZM68.01 27.0283H63.72V23.9983H71.43V34.9483H68.01V27.0283ZM74.4183 29.0683V19.2283H78.4383V28.1983C78.4383 29.3983 78.6583 30.3083 79.0983 30.9283C79.5383 31.5283 80.1883 31.8283 81.0483 31.8283C81.5683 31.8283 82.0783 31.7283 82.5783 31.5283C83.0983 31.3083 83.5683 30.9883 83.9883 30.5683C84.4283 30.1483 84.7983 29.6183 85.0983 28.9783V19.2283H89.1183V30.4483C89.1183 30.8683 89.1883 31.1683 89.3283 31.3483C89.4883 31.5283 89.7383 31.6383 90.0783 31.6783V34.9483C89.6783 35.0083 89.3383 35.0483 89.0583 35.0683C88.7983 35.1083 88.5583 35.1283 88.3383 35.1283C87.6183 35.1283 87.0283 34.9683 86.5683 34.6483C86.1283 34.3083 85.8683 33.8483 85.7883 33.2683L85.6983 32.0083C84.9983 33.0683 84.0983 33.8783 82.9983 34.4383C81.8983 34.9783 80.6883 35.2483 79.3683 35.2483C77.7483 35.2483 76.5183 34.7283 75.6783 33.6883C74.8383 32.6283 74.4183 31.0883 74.4183 29.0683ZM100.403 35.2483C99.1432 35.2483 98.0032 35.0383 96.9832 34.6183C95.9632 34.1783 95.0932 33.5883 94.3732 32.8483C93.6532 32.0883 93.0932 31.2283 92.6932 30.2683C92.3132 29.2883 92.1232 28.2583 92.1232 27.1783C92.1232 25.6783 92.4532 24.3083 93.1132 23.0683C93.7932 21.8283 94.7532 20.8383 95.9932 20.0983C97.2532 19.3383 98.7332 18.9583 100.433 18.9583C102.153 18.9583 103.623 19.3383 104.843 20.0983C106.063 20.8383 106.993 21.8283 107.633 23.0683C108.293 24.2883 108.623 25.6083 108.623 27.0283C108.623 27.2683 108.613 27.5183 108.593 27.7783C108.573 28.0183 108.553 28.2183 108.533 28.3783H96.3832C96.4632 29.1783 96.6932 29.8783 97.0732 30.4783C97.4732 31.0783 97.9732 31.5383 98.5732 31.8583C99.1932 32.1583 99.8532 32.3083 100.553 32.3083C101.353 32.3083 102.103 32.1183 102.803 31.7383C103.523 31.3383 104.013 30.8183 104.273 30.1783L107.723 31.1383C107.343 31.9383 106.793 32.6483 106.073 33.2683C105.373 33.8883 104.543 34.3783 103.583 34.7383C102.623 35.0783 101.563 35.2483 100.403 35.2483ZM96.2932 25.8283H104.513C104.433 25.0283 104.203 24.3383 103.823 23.7583C103.463 23.1583 102.983 22.6983 102.383 22.3783C101.783 22.0383 101.113 21.8683 100.373 21.8683C99.6532 21.8683 98.9932 22.0383 98.3932 22.3783C97.8132 22.6983 97.3332 23.1583 96.9532 23.7583C96.5932 24.3383 96.3732 25.0283 96.2932 25.8283ZM110.112 27.0883C110.112 25.5683 110.412 24.1983 111.012 22.9783C111.612 21.7383 112.442 20.7583 113.502 20.0383C114.562 19.3183 115.772 18.9583 117.132 18.9583C118.292 18.9583 119.332 19.2483 120.252 19.8283C121.192 20.3883 121.922 21.1083 122.442 21.9883V13.0483H126.462V30.4483C126.462 30.8683 126.532 31.1683 126.672 31.3483C126.812 31.5283 127.052 31.6383 127.392 31.6783V34.9483C126.692 35.0883 126.122 35.1583 125.682 35.1583C124.962 35.1583 124.362 34.9783 123.882 34.6183C123.422 34.2583 123.162 33.7883 123.102 33.2083L123.042 32.2183C122.462 33.1983 121.672 33.9483 120.672 34.4683C119.692 34.9883 118.662 35.2483 117.582 35.2483C116.502 35.2483 115.502 35.0383 114.582 34.6183C113.682 34.1983 112.892 33.6183 112.212 32.8783C111.552 32.1383 111.032 31.2783 110.652 30.2983C110.292 29.2983 110.112 28.2283 110.112 27.0883ZM122.442 29.1883V25.4383C122.242 24.8583 121.922 24.3383 121.482 23.8783C121.042 23.4183 120.552 23.0583 120.012 22.7983C119.472 22.5183 118.932 22.3783 118.392 22.3783C117.772 22.3783 117.212 22.5083 116.712 22.7683C116.212 23.0283 115.772 23.3783 115.392 23.8183C115.032 24.2583 114.752 24.7683 114.552 25.3483C114.372 25.9283 114.282 26.5383 114.282 27.1783C114.282 27.8183 114.382 28.4283 114.582 29.0083C114.802 29.5683 115.112 30.0583 115.512 30.4783C115.912 30.8983 116.372 31.2283 116.892 31.4683C117.432 31.7083 118.012 31.8283 118.632 31.8283C119.012 31.8283 119.392 31.7683 119.772 31.6483C120.172 31.5083 120.542 31.3283 120.882 31.1083C121.242 30.8683 121.552 30.5883 121.812 30.2683C122.092 29.9283 122.302 29.5683 122.442 29.1883ZM137.698 35.2483C136.438 35.2483 135.298 35.0383 134.278 34.6183C133.258 34.1783 132.388 33.5883 131.668 32.8483C130.948 32.0883 130.388 31.2283 129.988 30.2683C129.608 29.2883 129.418 28.2583 129.418 27.1783C129.418 25.6783 129.748 24.3083 130.408 23.0683C131.088 21.8283 132.048 20.8383 133.288 20.0983C134.548 19.3383 136.028 18.9583 137.728 18.9583C139.448 18.9583 140.918 19.3383 142.138 20.0983C143.358 20.8383 144.288 21.8283 144.928 23.0683C145.588 24.2883 145.918 25.6083 145.918 27.0283C145.918 27.2683 145.908 27.5183 145.888 27.7783C145.868 28.0183 145.848 28.2183 145.828 28.3783H133.678C133.758 29.1783 133.988 29.8783 134.368 30.4783C134.768 31.0783 135.268 31.5383 135.868 31.8583C136.488 32.1583 137.148 32.3083 137.848 32.3083C138.648 32.3083 139.398 32.1183 140.098 31.7383C140.818 31.3383 141.308 30.8183 141.568 30.1783L145.018 31.1383C144.638 31.9383 144.088 32.6483 143.368 33.2683C142.668 33.8883 141.838 34.3783 140.878 34.7383C139.918 35.0783 138.858 35.2483 137.698 35.2483ZM133.588 25.8283H141.808C141.728 25.0283 141.498 24.3383 141.118 23.7583C140.758 23.1583 140.278 22.6983 139.678 22.3783C139.078 22.0383 138.408 21.8683 137.668 21.8683C136.948 21.8683 136.288 22.0383 135.688 22.3783C135.108 22.6983 134.628 23.1583 134.248 23.7583C133.888 24.3383 133.668 25.0283 133.588 25.8283ZM154.157 35.2483C152.817 35.2483 151.537 35.0283 150.317 34.5883C149.097 34.1483 148.047 33.4983 147.167 32.6383L148.607 30.0283C149.547 30.7883 150.467 31.3483 151.367 31.7083C152.287 32.0683 153.167 32.2483 154.007 32.2483C154.787 32.2483 155.407 32.1083 155.867 31.8283C156.347 31.5483 156.587 31.1283 156.587 30.5683C156.587 30.1883 156.457 29.8983 156.197 29.6983C155.937 29.4783 155.557 29.2883 155.057 29.1283C154.577 28.9683 153.987 28.7883 153.287 28.5883C152.127 28.2083 151.157 27.8383 150.377 27.4783C149.597 27.1183 149.007 26.6683 148.607 26.1283C148.227 25.5683 148.037 24.8583 148.037 23.9983C148.037 22.9583 148.297 22.0683 148.817 21.3283C149.357 20.5683 150.097 19.9783 151.037 19.5583C151.997 19.1383 153.117 18.9283 154.397 18.9283C155.517 18.9283 156.577 19.1083 157.577 19.4683C158.577 19.8083 159.487 20.3683 160.307 21.1483L158.687 23.6983C157.887 23.0783 157.127 22.6283 156.407 22.3483C155.687 22.0483 154.957 21.8983 154.217 21.8983C153.797 21.8983 153.397 21.9483 153.017 22.0483C152.657 22.1483 152.357 22.3183 152.117 22.5583C151.897 22.7783 151.787 23.0983 151.787 23.5183C151.787 23.8983 151.887 24.1983 152.087 24.4183C152.307 24.6183 152.627 24.7983 153.047 24.9583C153.487 25.1183 154.017 25.2983 154.637 25.4983C155.897 25.8583 156.957 26.2283 157.817 26.6083C158.697 26.9883 159.357 27.4583 159.797 28.0183C160.237 28.5583 160.457 29.3083 160.457 30.2683C160.457 31.8283 159.887 33.0483 158.747 33.9283C157.607 34.8083 156.077 35.2483 154.157 35.2483ZM183.478 19.2283C183.338 19.0883 183.078 18.8983 182.698 18.6583C182.338 18.4183 181.888 18.1883 181.348 17.9683C180.828 17.7483 180.258 17.5583 179.638 17.3983C179.018 17.2183 178.388 17.1283 177.748 17.1283C176.628 17.1283 175.778 17.3383 175.198 17.7583C174.638 18.1783 174.358 18.7683 174.358 19.5283C174.358 20.1083 174.538 20.5683 174.898 20.9083C175.258 21.2483 175.798 21.5383 176.518 21.7783C177.238 22.0183 178.138 22.2783 179.218 22.5583C180.618 22.8983 181.828 23.3183 182.848 23.8183C183.888 24.2983 184.678 24.9383 185.218 25.7383C185.778 26.5183 186.058 27.5583 186.058 28.8583C186.058 29.9983 185.848 30.9783 185.428 31.7983C185.008 32.5983 184.428 33.2483 183.688 33.7483C182.948 34.2483 182.108 34.6183 181.168 34.8583C180.228 35.0783 179.228 35.1883 178.168 35.1883C177.108 35.1883 176.048 35.0783 174.988 34.8583C173.928 34.6383 172.908 34.3283 171.928 33.9283C170.948 33.5083 170.048 33.0083 169.228 32.4283L171.058 28.8583C171.238 29.0383 171.558 29.2783 172.018 29.5783C172.478 29.8583 173.038 30.1483 173.698 30.4483C174.358 30.7283 175.078 30.9683 175.858 31.1683C176.638 31.3683 177.428 31.4683 178.228 31.4683C179.348 31.4683 180.198 31.2783 180.778 30.8983C181.358 30.5183 181.648 29.9783 181.648 29.2783C181.648 28.6383 181.418 28.1383 180.958 27.7783C180.498 27.4183 179.858 27.1083 179.038 26.8483C178.218 26.5683 177.248 26.2683 176.128 25.9483C174.788 25.5683 173.668 25.1483 172.768 24.6883C171.868 24.2083 171.198 23.6083 170.758 22.8883C170.318 22.1683 170.098 21.2683 170.098 20.1883C170.098 18.7283 170.438 17.5083 171.118 16.5283C171.818 15.5283 172.758 14.7783 173.938 14.2783C175.118 13.7583 176.428 13.4983 177.868 13.4983C178.868 13.4983 179.808 13.6083 180.688 13.8283C181.588 14.0483 182.428 14.3383 183.208 14.6983C183.988 15.0583 184.688 15.4483 185.308 15.8683L183.478 19.2283ZM188.559 29.0683V19.2283H192.579V28.1983C192.579 29.3983 192.799 30.3083 193.239 30.9283C193.679 31.5283 194.329 31.8283 195.189 31.8283C195.709 31.8283 196.219 31.7283 196.719 31.5283C197.239 31.3083 197.709 30.9883 198.129 30.5683C198.569 30.1483 198.939 29.6183 199.239 28.9783V19.2283H203.259V30.4483C203.259 30.8683 203.329 31.1683 203.469 31.3483C203.629 31.5283 203.879 31.6383 204.219 31.6783V34.9483C203.819 35.0083 203.479 35.0483 203.199 35.0683C202.939 35.1083 202.699 35.1283 202.479 35.1283C201.759 35.1283 201.169 34.9683 200.709 34.6483C200.269 34.3083 200.009 33.8483 199.929 33.2683L199.839 32.0083C199.139 33.0683 198.239 33.8783 197.139 34.4383C196.039 34.9783 194.829 35.2483 193.509 35.2483C191.889 35.2483 190.659 34.7283 189.819 33.6883C188.979 32.6283 188.559 31.0883 188.559 29.0683ZM214.544 35.2483C213.284 35.2483 212.144 35.0383 211.124 34.6183C210.104 34.1783 209.234 33.5883 208.514 32.8483C207.794 32.0883 207.234 31.2283 206.834 30.2683C206.454 29.2883 206.264 28.2583 206.264 27.1783C206.264 25.6783 206.594 24.3083 207.254 23.0683C207.934 21.8283 208.894 20.8383 210.134 20.0983C211.394 19.3383 212.874 18.9583 214.574 18.9583C216.294 18.9583 217.764 19.3383 218.984 20.0983C220.204 20.8383 221.134 21.8283 221.774 23.0683C222.434 24.2883 222.764 25.6083 222.764 27.0283C222.764 27.2683 222.754 27.5183 222.734 27.7783C222.714 28.0183 222.694 28.2183 222.674 28.3783H210.524C210.604 29.1783 210.834 29.8783 211.214 30.4783C211.614 31.0783 212.114 31.5383 212.714 31.8583C213.334 32.1583 213.994 32.3083 214.694 32.3083C215.494 32.3083 216.244 32.1183 216.944 31.7383C217.664 31.3383 218.154 30.8183 218.414 30.1783L221.864 31.1383C221.484 31.9383 220.934 32.6483 220.214 33.2683C219.514 33.8883 218.684 34.3783 217.724 34.7383C216.764 35.0783 215.704 35.2483 214.544 35.2483ZM210.434 25.8283H218.654C218.574 25.0283 218.344 24.3383 217.964 23.7583C217.604 23.1583 217.124 22.6983 216.524 22.3783C215.924 22.0383 215.254 21.8683 214.514 21.8683C213.794 21.8683 213.134 22.0383 212.534 22.3783C211.954 22.6983 211.474 23.1583 211.094 23.7583C210.734 24.3383 210.514 25.0283 210.434 25.8283ZM232.533 35.2483C231.253 35.2483 230.103 35.0383 229.083 34.6183C228.063 34.1783 227.193 33.5783 226.473 32.8183C225.753 32.0383 225.193 31.1583 224.793 30.1783C224.413 29.1983 224.223 28.1683 224.223 27.0883C224.223 25.6083 224.553 24.2583 225.213 23.0383C225.893 21.7983 226.853 20.8083 228.093 20.0683C229.333 19.3283 230.803 18.9583 232.503 18.9583C234.203 18.9583 235.663 19.3283 236.883 20.0683C238.103 20.8083 239.013 21.7783 239.613 22.9783L235.683 24.1783C235.343 23.5983 234.893 23.1583 234.333 22.8583C233.773 22.5383 233.153 22.3783 232.473 22.3783C231.713 22.3783 231.013 22.5783 230.373 22.9783C229.753 23.3583 229.263 23.9083 228.903 24.6283C228.543 25.3283 228.363 26.1483 228.363 27.0883C228.363 28.0083 228.543 28.8283 228.903 29.5483C229.283 30.2483 229.783 30.8083 230.403 31.2283C231.023 31.6283 231.713 31.8283 232.473 31.8283C232.953 31.8283 233.403 31.7483 233.823 31.5883C234.263 31.4283 234.653 31.2083 234.993 30.9283C235.333 30.6483 235.583 30.3283 235.743 29.9683L239.673 31.1683C239.313 31.9483 238.783 32.6483 238.083 33.2683C237.403 33.8883 236.593 34.3783 235.653 34.7383C234.733 35.0783 233.693 35.2483 232.533 35.2483ZM241.066 30.2983C241.066 29.2783 241.346 28.3883 241.906 27.6283C242.486 26.8483 243.286 26.2483 244.306 25.8283C245.326 25.4083 246.496 25.1983 247.816 25.1983C248.476 25.1983 249.146 25.2483 249.826 25.3483C250.506 25.4483 251.096 25.6083 251.596 25.8283V24.9883C251.596 23.9883 251.296 23.2183 250.696 22.6783C250.116 22.1383 249.246 21.8683 248.086 21.8683C247.226 21.8683 246.406 22.0183 245.626 22.3183C244.846 22.6183 244.026 23.0583 243.166 23.6383L241.876 20.9983C242.916 20.3183 243.976 19.8083 245.056 19.4683C246.156 19.1283 247.306 18.9583 248.506 18.9583C250.746 18.9583 252.486 19.5183 253.726 20.6383C254.986 21.7583 255.616 23.3583 255.616 25.4383V30.4483C255.616 30.8683 255.686 31.1683 255.826 31.3483C255.986 31.5283 256.236 31.6383 256.576 31.6783V34.9483C256.216 35.0083 255.886 35.0583 255.586 35.0983C255.306 35.1383 255.066 35.1583 254.866 35.1583C254.066 35.1583 253.456 34.9783 253.036 34.6183C252.636 34.2583 252.386 33.8183 252.286 33.2983L252.196 32.4883C251.516 33.3683 250.666 34.0483 249.646 34.5283C248.626 35.0083 247.586 35.2483 246.526 35.2483C245.486 35.2483 244.546 35.0383 243.706 34.6183C242.886 34.1783 242.236 33.5883 241.756 32.8483C241.296 32.0883 241.066 31.2383 241.066 30.2983ZM250.846 31.1083C251.066 30.8683 251.246 30.6283 251.386 30.3883C251.526 30.1483 251.596 29.9283 251.596 29.7283V28.1383C251.116 27.9383 250.596 27.7883 250.036 27.6883C249.476 27.5683 248.946 27.5083 248.446 27.5083C247.406 27.5083 246.546 27.7383 245.866 28.1983C245.206 28.6383 244.876 29.2283 244.876 29.9683C244.876 30.3683 244.986 30.7483 245.206 31.1083C245.426 31.4683 245.746 31.7583 246.166 31.9783C246.586 32.1983 247.086 32.3083 247.666 32.3083C248.266 32.3083 248.856 32.1983 249.436 31.9783C250.016 31.7383 250.486 31.4483 250.846 31.1083Z" fill="black" />
                    <rect x="0.293534" y="5.213" width="25.5" height="36.5" rx="2.75" transform="rotate(-11.1232 0.293534 5.213)" fill="black" stroke="white" stroke-width="0.5" />
                    <rect x="18.6434" y="4.89139" width="25.5" height="36.5" rx="2.75" transform="rotate(21.0169 18.6434 4.89139)" fill="black" stroke="white" stroke-width="0.5" />
                    <path d="M31.5996 29.9554C31.3119 30.7043 30.836 31.3664 30.2178 31.8777C29.5996 32.3891 28.86 32.7324 28.0704 32.8746C27.2809 33.0168 26.468 32.953 25.7103 32.6894C24.9525 32.4258 24.2755 31.9714 23.7447 31.3699L23.603 34.5133C23.5982 34.6188 23.5684 34.7217 23.5161 34.8134C23.4638 34.9052 23.3904 34.9832 23.302 35.0411C23.2136 35.0989 23.1128 35.1349 23.0077 35.1461C22.9027 35.1573 22.7965 35.1434 22.6979 35.1055L18.5828 33.5245C18.4842 33.4866 18.396 33.4258 18.3255 33.3472C18.255 33.2685 18.2042 33.1742 18.1772 33.0721C18.1503 32.9699 18.1481 32.8628 18.1706 32.7596C18.1932 32.6564 18.24 32.5601 18.3072 32.4785L20.3066 30.0489C19.5095 30.1402 18.7024 30.0245 17.9631 29.7129C17.2238 29.4014 16.5774 28.9044 16.0861 28.2702C15.5949 27.6359 15.2754 26.8857 15.1586 26.092C15.0419 25.2983 15.1317 24.4879 15.4194 23.739C17.0205 19.5715 26.5063 17.5798 26.9093 17.4971C26.9717 17.4843 27.0365 17.4896 27.0959 17.5124C27.1554 17.5353 27.2071 17.5747 27.2448 17.626C27.4887 17.9573 33.2007 25.788 31.5996 29.9554Z" fill="white" />
                    <circle cx="20.9428" cy="10.0599" r="2.25" transform="rotate(21.0169 20.9428 10.0599)" fill="white" />
                    <circle cx="27.3446" cy="43.5862" r="2.25" transform="rotate(21.0169 27.3446 43.5862)" fill="white" />
                </svg>

            }

            {
                type === 'github' &&
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3798 0C6.88246 0 2.24475e-06 6.88245 2.24475e-06 15.3798C-0.00174216 18.6084 1.01324 21.7556 2.90096 24.3749C4.78868 26.9942 7.45327 28.9526 10.5167 29.9721C11.2857 30.1059 11.5733 29.6445 11.5733 29.24C11.5733 28.8755 11.5533 27.6652 11.5533 26.3763C7.68989 27.0884 6.69021 25.4351 6.38261 24.5692C6.20882 24.1263 5.45983 22.7621 4.80618 22.396C4.26789 22.1084 3.4989 21.3964 4.78619 21.3779C5.99812 21.3579 6.86246 22.4929 7.1516 22.9543C8.53578 25.2797 10.7474 24.6261 11.6302 24.2232C11.7655 23.2235 12.1685 22.5514 12.6114 22.1669C9.18942 21.7824 5.61362 20.4551 5.61362 14.5723C5.61362 12.899 6.20882 11.5164 7.19005 10.4383C7.03625 10.0538 6.49796 8.47734 7.34385 6.36262C7.34385 6.36262 8.63114 5.95967 11.5733 7.94058C12.8253 7.59309 14.1189 7.4182 15.4182 7.42074C16.7255 7.42074 18.0328 7.593 19.2632 7.93904C22.2038 5.93967 23.4926 6.36415 23.4926 6.36415C24.3385 8.47887 23.8002 10.0553 23.6464 10.4398C24.6261 11.5164 25.2228 12.8806 25.2228 14.5723C25.2228 20.4751 21.6286 21.7824 18.2066 22.1669C18.7633 22.6467 19.2447 23.5695 19.2447 25.0121C19.2447 27.0684 19.2247 28.7217 19.2247 29.2416C19.2247 29.6445 19.5139 30.1244 20.2829 29.9706C23.3358 28.9398 25.9886 26.9777 27.868 24.3603C29.7474 21.7429 30.7587 18.602 30.7596 15.3798C30.7596 6.88245 23.8771 0 15.3798 0Z" fill="black" />
                </svg>
            }

            {
                type === 'figma' &&
                <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1355 11.2266C13.051 11.2266 11.3617 12.916 11.3617 15.0005C11.3617 17.085 13.051 18.7744 15.1355 18.7744H15.2576C17.342 18.7744 19.0314 17.085 19.0314 15.0005C19.0314 12.916 17.342 11.2266 15.2576 11.2266H15.1355ZM15.2576 20.6128H15.1355C12.0358 20.6128 9.52322 18.1002 9.52322 15.0005C9.52322 11.9008 12.0358 9.38819 15.1355 9.38819H15.2576C18.3573 9.38819 20.8699 11.9008 20.8699 15.0005C20.8699 18.1002 18.3573 20.6128 15.2576 20.6128ZM5.62731 20.6128C3.54283 20.6128 1.85243 22.3022 1.85243 24.3867C1.85243 26.4712 3.54183 28.1606 5.62631 28.1606C5.63732 28.1606 5.64932 28.1606 5.66032 28.1606H5.65832C5.66132 28.1606 5.66532 28.1606 5.66932 28.1606C7.79082 28.1606 9.51322 26.4462 9.52422 24.3267V20.6128H5.62731ZM5.65732 30C5.64432 30 5.62831 30 5.61231 30C2.51259 30 0 27.4874 0 24.3877C0 21.288 2.51259 18.7754 5.61231 18.7754C5.61731 18.7754 5.62231 18.7754 5.62731 18.7754H11.3617V24.3267C11.3496 27.4624 8.80405 30 5.66732 30C5.66432 30 5.66132 30 5.65832 30H5.65732ZM5.62731 11.2266C3.54283 11.2266 1.85343 12.916 1.85343 15.0005C1.85343 17.085 3.54283 18.7754 5.62731 18.7754L9.52322 18.7744V11.2276L5.62731 11.2266ZM11.3607 20.6128H5.62731C2.52759 20.6128 0.0150034 18.1002 0.0150034 15.0005C0.0150034 11.9008 2.52759 9.38819 5.62731 9.38819H11.3617V20.6128H11.3607ZM5.62731 1.84043C3.54283 1.84043 1.85343 3.52982 1.85343 5.61431C1.85343 7.6988 3.54283 9.38819 5.62731 9.38819H9.52322V1.83943L5.62731 1.84043ZM11.3607 11.2266H5.62731C2.52759 11.2266 0.0140032 8.71403 0.0140032 5.61331C0.0140032 2.51259 2.52659 0 5.62731 0H11.3617V11.2256L11.3607 11.2266ZM11.3607 9.38819H15.2576C17.338 9.38319 19.0214 7.6958 19.0214 5.61431C19.0214 3.53282 17.337 1.84543 15.2566 1.84043H11.3607V9.38819ZM15.2576 11.2266L9.52322 11.2276V0.00100016H15.2576C18.3573 0.00100016 20.8709 2.51359 20.8709 5.61431C20.8709 8.71503 18.3583 11.2266 15.2576 11.2266Z" fill="black" />
                </svg>

            }
        </>
    )
}

export default SVG