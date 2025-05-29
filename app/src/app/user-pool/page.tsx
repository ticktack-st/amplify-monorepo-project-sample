// import { Sha256 } from '@aws-crypto/sha256-browser'
// import { SignatureV4 } from '@aws-sdk/signature-v4'

// import type { DescribeUserPoolResponse } from '@/types/user-pool'
// // import parse from 'html-react-parser';

// const credentials = {
//   accessKeyId: '',
//   secretAccessKey: '',
//   sessionToken: '',
// }

// async function signedFetch(): Promise<DescribeUserPoolResponse> {
//   const signer = new SignatureV4({
//     credentials,
//     region: 'ap-northeast-1',
//     service: 'execute-api',
//     sha256: Sha256,
//   })

//   const request = {
//     method: 'GET',
//     protocol: 'https:',
//     hostname: 'kf2lbige8i.execute-api.ap-northeast-1.amazonaws.com',
//     path: '/dev/user-pool?testtest=1',
//     headers: {
//       host: 'kf2lbige8i.execute-api.ap-northeast-1.amazonaws.com',
//     },
//   }

//   const signedRequest = await signer.sign(request)
//   console.log('signedRequest', signedRequest)

//   if (credentials.sessionToken) {
//     signedRequest.headers['X-Amz-Security-Token'] = credentials.sessionToken
//   }
//   const url = `${request.protocol}//${request.hostname}${request.path}`
//   console.log('url', url)
//   const response = await fetch(url, {
//     method: signedRequest.method,
//     headers: signedRequest.headers,
//   })

//   const data = await response.json()
//   return data.body
// }

export default async function Page() {
  // const data = await fetch(
  //   "https://kf2lbige8i.execute-api.ap-northeast-1.amazonaws.com/dev/user-pool?testtest=1"
  // );
  // const poolDetail: DescribeUserPoolResponse = await signedFetch()
  const poolDetail = ''
  // console.log("poolDetail", JSON.stringify(poolDetail, null, 4));
  const jsonString = JSON.stringify(poolDetail, undefined, 4)
  const pattern1 = /,/g
  const newStr1 = jsonString.replaceAll(pattern1, ',\n')
  const pattern2 = /}/g
  const newStr2 = newStr1.replaceAll(pattern2, '\n}}')
  const pattern3 = /{/g
  const newStr3 = newStr2.replaceAll(pattern3, '{\n')
  const pattern4 = /\\/g
  const newStr4 = newStr3.replaceAll(pattern4, '')

  return (
    <section className="body-font overflow-hidden text-gray-600">
      <div className="container mx-auto px-5 py-5">
        <h1 className="mb-10 text-center text-3xl font-bold text-gray-900">
          ユーザープール設定
        </h1>
      </div>
      <div className="container mx-auto px-5 py-5">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="flex flex-wrap py-8 md:flex-nowrap">
            {/* <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"> */}
            {/* <span className="font-semibold title-font text-gray-700"> */}
            {/* {JSON.stringify(poolDetail)} */}
            <pre>{newStr4}</pre>
            {/* </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY */}
            {/* </span> */}
            {/* <span className="text-sm text-gray-500">12 Jun 2019</span> */}
          </div>
          {/* <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

// function objectToHtmlList(obj: DescribeUserPoolResponse, indent: number = 0): string {
//   const indentStyle = `padding-left: ${indent * 20}px;`;
//   let html = '<ul>';
//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       const type = typeof key;
//       const value = obj[key];
//       if (value === null || value === undefined) {
//         html += `<li style="${indentStyle}"><strong>${key}:</strong> <em>null</em></li>`;
//       } else if (typeof value === 'object') {
//         if (Array.isArray(value)) {
//           html += `<li style="${indentStyle}"><strong>${key}:</strong><ul>`;
//           for (const item of value) {
//             if (typeof item === 'object' && item !== null) {
//               html += objectToHtmlList(item, indent + 1);
//             } else {
//               html += `<li style="padding-left: ${(indent + 1) * 20}px;">${item}</li>`;
//             }
//           }
//           html += '</ul></li>';
//         } else {
//           html += `<li style="${indentStyle}"><strong>${key}:</strong>${objectToHtmlList(value, indent + 1)}</li>`;
//         }
//       } else {
//         html += `<li style="${indentStyle}"><strong>${key}:</strong> ${value}</li>`;
//       }
//     }
//   }
//   html += '</ul>';
//   return html;
// }
