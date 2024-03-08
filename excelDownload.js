const axios = require('axios');
const fs = require('fs');
const path = require('path');

let data = [
    'https://drive.google.com/file/d/1lF5WBURhGC8TTv7isXpI9__x4m5Rr68e/view?usp=drive_link',
'https://drive.google.com/file/d/1vLUgi-PWKG0J3LsKsFK1i4SxZLkmiLAS/view?usp=drive_link',
'https://drive.google.com/file/d/1weP0pLUTtFd8A5LwU-3V9Nn2cl_6wWkC/view?usp=drive_link',
'https://drive.google.com/file/d/1mx-m6E9M5N47Xlqx9tBh0bWs1b1dKQRD/view?usp=drive_link',
'https://drive.google.com/file/d/1ssr1T2XjOh831sPrpiGc_ITUbTEdiyZ0/view?usp=drive_link',
'https://drive.google.com/file/d/1t23_0P3Jm4ubzIGVee6bphRDp8s-bN_e/view?usp=drive_link',
'https://drive.google.com/file/d/1mFasF7cywv9aNDESWdvfwwrM98Eih-4p/view?usp=drive_link',
'https://drive.google.com/file/d/1vf0JVcXXeDnaPFn-YOYmoF9pWP-GLFXU/view?usp=drive_link',
'https://drive.google.com/file/d/1lrAnnwTW5iqIrUwpCaDMtUMjiskgOpfN/view?usp=drive_link',
'https://drive.google.com/file/d/1lo6fxqGVYyhvrstirEPPKwmegH8cCiAo/view?usp=drive_link',
'https://drive.google.com/file/d/1vZoz_tU3Ju7pXydzYA8MIxeuwm5oT-JC/view?usp=drive_link',
'https://drive.google.com/file/d/1nH5_1dN2LePbIeBBzzlOu69upg7DSWPq/view?usp=drive_link',
'https://drive.google.com/file/d/1ni5QQsFX27dgKeJO8ssW51tlOThPCpnH/view?usp=drive_link',
'https://drive.google.com/file/d/1n88S5ZTld4zYN4Z9NVQqjISElOUp0IiJ/view?usp=drive_link',
'https://drive.google.com/file/d/1xE--C8X567ec7cXrx6rCbm9qH9FOH2RO/view?usp=drive_link',
'https://drive.google.com/file/d/1ryEsyKrnHNlEZwvr18eRyK06z1rC5LLm/view?usp=drive_link',
'https://drive.google.com/file/d/1tnVCFS5P7EI4AQJ7KFqpI38FDXFSxSW7/view?usp=drive_link',
'https://drive.google.com/file/d/1lq7WPE9ziv4S_RhGi-KQelyFkJ9SA1Ho/view?usp=drive_link',
'https://drive.google.com/file/d/1uHTNCVEHjV6A3-5TmEF8jNiI8V3uPKdM/view?usp=drive_link',
'https://drive.google.com/file/d/1nKpGBO-nyOFbSJZeFgGclrsDe3kdXi_C/view?usp=drive_link',
'https://drive.google.com/file/d/1rXz8RiASBYBeojNXZPJ4P_XIknwvErPN/view?usp=drive_link',
'https://drive.google.com/file/d/1ouhz9Nu1KnJHE1rd4oJKG1c93eT-UUvL/view?usp=drive_link',
'https://drive.google.com/file/d/1lbR3uPOsLAyM5bWr5Z6UvUynMKe131vW/view?usp=drive_link',
'https://drive.google.com/file/d/1mEOlPR23zE_2q75hwGVH-NuehT7Uw5dd/view?usp=drive_link',
'https://drive.google.com/file/d/1qHVYMmaWQ3rVRxqAWexMprBL-qvtRnhc/view?usp=drive_link',
'https://drive.google.com/file/d/1rZvOJ3I8r4jMLC-M5AS-ZnJV4tuDGSjw/view?usp=drive_link',
'https://drive.google.com/file/d/1vo_umgjZaIgoOAfhzmeFr4twvbFbGUkt/view?usp=drive_link',
'https://drive.google.com/file/d/1vSdLZI_xHBrVCodBFItimpwrsoGpGf4_/view?usp=drive_link',
'https://drive.google.com/file/d/1q__2PgUXlLuV0rrbVqN-crr-ffRfdhZX/view?usp=drive_link',
'https://drive.google.com/file/d/1qx1zLd2pfucgWwRbj32d8aN_7Pi4wFKQ/view?usp=drive_link',
'https://drive.google.com/file/d/1vS5-G7074LcfAcHW8pZAph-WGHVlZIah/view?usp=drive_link',
'https://drive.google.com/file/d/1uJ4VLSLP_XVu-QmSPxN6HCs9YmGG0yWS/view?usp=drive_link',
'https://drive.google.com/file/d/1mP8FAnLFjpNbdwNufzCtuqFQlFvf3wCz/view?usp=drive_link',
'https://drive.google.com/file/d/1ouyuPZY-LFvsrWGVOP_3IuOiCL3DiVOr/view?usp=drive_link',
'https://drive.google.com/file/d/1qvIQTuJa2knUOm4S4PwvOmeY4-CGchXh/view?usp=drive_link',
'https://drive.google.com/file/d/1m6ggLoA9XjKcgu5f1UCjAu9LHd3q0DLY/view?usp=drive_link',
'https://drive.google.com/file/d/1uU7bYT1HN_LXTjNgTb6jeLegSsbyM1B7/view?usp=drive_link',
'https://drive.google.com/file/d/1szlxjBJKQBRzkxkErv1KEUcspU0yxT9q/view?usp=drive_link',
'https://drive.google.com/file/d/1xIOzKk2Zao64FVfYseNq2p7InBmm9Tle/view?usp=drive_link',
'https://drive.google.com/file/d/1uJpz4PJagFEwZs-JAGfw8EaHExoqBo8x/view?usp=drive_link',
'https://drive.google.com/file/d/1vJwwzmWG1fWpVBnBIJdl3z9kgZZOnXtq/view?usp=drive_link',
'https://drive.google.com/file/d/1pZx7oi4gfj-jUOg7CbNdQadYQDM-O1vo/view?usp=drive_link',
'https://drive.google.com/file/d/1pCJKKAXN2FquSNxLXSC1n-RAJTozPtNz/view?usp=drive_link',
'https://drive.google.com/file/d/1sjlg8d2H8xlpCdya0sW1Dxmgj7b-PiaO/view?usp=drive_link',

'https://drive.google.com/file/d/1qKrBI5dXXIJ1THbprwgO-ZCk4x7Et1JC/view?usp=drive_link',
'https://drive.google.com/file/d/1ledQjQBHkspPV6GMfsFkvolr0Whu0PhG/view?usp=drive_link',
'https://drive.google.com/file/d/1u-cn6j22KEaxMMtYdOP1wzVK4x2FF0ub/view?usp=drive_link',
'https://drive.google.com/file/d/1w9a0RyvICAmgt6Zajtsew0xoNmfGbvxr/view?usp=drive_link',
'https://drive.google.com/file/d/1tsa3LESVvHEGw-jYCGxzsORuOaTmfxkm/view?usp=drive_link',
'https://drive.google.com/file/d/1vNp7poCi9pwpnv3wZfz3rR-T6G6SNTD2/view?usp=drive_link',
'https://drive.google.com/file/d/1xP2shxPZ9a1QM5Z18n2XfdJ2UWz2CiDn/view?usp=drive_link',
'https://drive.google.com/file/d/1mBBBpn8w9akuHIVuojRdfCoXqmFbGvCm/view?usp=drive_link',
'https://drive.google.com/file/d/1wEfIgtF7SmGWkXR0d9hV35DJBuJxE-bK/view?usp=drive_link',
'https://drive.google.com/file/d/1smRElYPSxqMZcum6Zwz4pgjJJ-AOSPmt/view?usp=drive_link',
'https://drive.google.com/file/d/1qXkQ2mwJJ0ETtO65eSJGKrF1hYut28Rc/view?usp=drive_link',
'https://drive.google.com/file/d/1nQy9HuVJH3gTZXBvmHcDnYK6EAo2sqXN/view?usp=drive_link',
'https://drive.google.com/file/d/1tuS_BSiJh0_G1nQ-A7AKn-yPuFOalWQR/view?usp=drive_link',
'https://drive.google.com/file/d/1xDB1mVXpHL6JS8PLBXgG01g-il3bq5kh/view?usp=drive_link',
'https://drive.google.com/file/d/1ml5QpWnDXgjCUE5AMhVZdMrE0dIF7XEI/view?usp=drive_link',
'https://drive.google.com/file/d/1rpYmoAREUVVs93jFMw4tvMCcTQjbMaEb/view?usp=drive_link',
'https://drive.google.com/file/d/1xPBFItLfGcKAntEWnDuFo57ibcmhyaVu/view?usp=drive_link',
'https://drive.google.com/file/d/1rFkTkyY4VPsLy6HOaJNqBvSn2evGVJRP/view?usp=drive_link',
'https://drive.google.com/file/d/1mMYaJLIpmSaZRo9MnNDcMWXVp400pAJ8/view?usp=drive_link',
'https://drive.google.com/file/d/1o4rKeV9ghEqLu7yxdo4ytwIGQInS88di/view?usp=drive_link',
'https://drive.google.com/file/d/1lGD_v7FgEEg5enIE-g72Sq-ErMsgsuxS/view?usp=drive_link',
'https://drive.google.com/file/d/1x3awVEhOikAdzOjhx_CPvX5smNDRby3x/view?usp=drive_link',
'https://drive.google.com/file/d/1uSU6D3HuTbzfHLXP1287lpMyYdSRqxeI/view?usp=drive_link',
'https://drive.google.com/file/d/1t8ft95OGg4LskGLPzUM3Iry8fafzapS9/view?usp=drive_link',
'https://drive.google.com/file/d/1q97O1DWhtGoxmqxBjWcxR-fyaQe8Jmgc/view?usp=drive_link',
'https://drive.google.com/file/d/1wOCFQDmXDs4qxZqhNeX9TBS9soSwztht/view?usp=drive_link',
'https://drive.google.com/file/d/1nseOwNUzQCApRD83MoQCk9KPZhcIQVTQ/view?usp=drive_link',
'https://drive.google.com/file/d/1rVPUBgWBwPRsp58-YY-CTlpwTj9AyPFJ/view?usp=drive_link',
'https://drive.google.com/file/d/1ra4dPlR3tCru6m4L1o7nfn8b3yT9qZu3/view?usp=drive_link',
'https://drive.google.com/file/d/1vCo625j92rIiYkJBbfCKYHSHfrwUV0ei/view?usp=drive_link',
'https://drive.google.com/file/d/1m9GiPnIaL00eTHxI255r__HVZZx-G4gC/view?usp=drive_link',
'https://drive.google.com/file/d/1rfSZ2r4eXmwZyXA3gHrtOLmX4ZdsRWaf/view?usp=drive_link',
'https://drive.google.com/file/d/1uwrtq_kNd6GHsS1tvXvlMr6VJpd4aOyJ/view?usp=drive_link',
'https://drive.google.com/file/d/1uOhXcVEt7oeLd77SymMVUZbn8Uzm9EcW/view?usp=drive_link',
'https://drive.google.com/file/d/1nnrGdxmJh3DGFWnNQ7gB7UBxRpYZL_fh/view?usp=drive_link',
'https://drive.google.com/file/d/1wtzarfxPDqFqNdbUbVi6ZNu_H_3ypNO8/view?usp=drive_link',
'https://drive.google.com/file/d/1mGVFrU8zkKRkpYpfRELsbpkiqM7nTS6v/view?usp=drive_link',
'https://drive.google.com/file/d/1mfYLW09BVFQ5ieTuFeitYrogyDzMJQa7/view?usp=drive_link',
'https://drive.google.com/file/d/1sQLA6vcLxxL0-1ZjwFbBQtv2hTE4-vkv/view?usp=drive_link',
'https://drive.google.com/file/d/1ndMLyk7UuEqI62HHBWFfvQnGN2dA7feI/view?usp=drive_link',
'https://drive.google.com/file/d/1w2yPDzAoQYV0nR3NXKEOZBO3KIqbAVEc/view?usp=drive_link',
'https://drive.google.com/file/d/1o1yCeZkmN-VRomb08hmoClYcKvH4Komo/view?usp=drive_link',
'https://drive.google.com/file/d/1m6a_kUeupvSjyVdncBHk7Z8-jxJxum4i/view?usp=drive_link',
'https://drive.google.com/file/d/1pUyCiR0NdaPkHWoI-NLPxpVIVZFcoUhu/view?usp=drive_link',
'https://drive.google.com/file/d/1obYCUBQr-8Um7HJQv4ogOSv8iNG5wkxx/view?usp=drive_link',
'https://drive.google.com/file/d/1mqskjoupZpPOvC-_uZnn9Z4J9waT8oEv/view?usp=drive_link',
'https://drive.google.com/file/d/1uHOwGfDzoRusrdr8pM0u7rTFMrbaIXor/view?usp=drive_link',
'https://drive.google.com/file/d/1qTLLQf76xm-55ZkN1e8ghwU6TKtIGVTu/view?usp=drive_link',
'https://drive.google.com/file/d/1vYQdW1DoEi6XnH0Mv8hPyQ1lFWp0RCIC/view?usp=drive_link',
'https://drive.google.com/file/d/1qg0ukNTH5bonaWeH7WoXc_S9TyMalq5P/view?usp=drive_link',
'https://drive.google.com/file/d/1rbQu3ABSBdrWySgjbchbzM-q2RKlTsvE/view?usp=drive_link',
'https://drive.google.com/file/d/1rzEYbnOnxFBL6EeT4hQB59i95plc4D7r/view?usp=drive_link',
'https://drive.google.com/file/d/1v0etWnhKrk_AQzxppYxw50lgBelhSdny/view?usp=drive_link',
'https://drive.google.com/file/d/1x8a7yvpbOURzlpzQnroy2ZqGq9pTkNSL/view?usp=drive_link',
'https://drive.google.com/file/d/1rjaYhGkEYeiXlyPSuXBXGRdfdbr8bOWq/view?usp=drive_link',
'https://drive.google.com/file/d/1lfY4GLu-zFrtY3_fvo-Ww2ut8jqvucX_/view?usp=drive_link',
'https://drive.google.com/file/d/1xMMxBTkW0Z6ggoobST8oNdx4F3hD_hKC/view?usp=drive_link',
'https://drive.google.com/file/d/1mA9B36KYdbj9Hn636_2_xuND0UldEnf-/view?usp=drive_link',
'https://drive.google.com/file/d/1pDfWDoWi8bk3u9F9CezW4jm0u4UlWDJa/view?usp=drive_link',
'https://drive.google.com/file/d/1sUkhC2h-4aVK0HEgCbZKI3-_wqUij-8z/view?usp=drive_link',
'https://drive.google.com/file/d/1o2VnG0Vd_p5XtaU7bC4c88FLymqoc5rA/view?usp=drive_link',
'https://drive.google.com/file/d/1qzNdPWWqbE1OCXeKWy0iVphqlq1JNVTD/view?usp=drive_link',
'https://drive.google.com/file/d/1vXxYpK0zL8lQkLMZhmo9gr0htkujnW9T/view?usp=drive_link',
'https://drive.google.com/file/d/1wHw9B0fS71E6I0SLmeuCSNF-Q2yrem1r/view?usp=drive_link',
'https://drive.google.com/file/d/1oVnre7oWTKJRP10frEyMLV3hJO92-MbN/view?usp=drive_link',
'https://drive.google.com/file/d/1t5GZyn8uUdUngxEDgrZ9F_v7czy2vXQS/view?usp=drive_link',
'https://drive.google.com/file/d/1vER5K1Dx5bk7x2KmvWptZ5gZ_GZdABg-/view?usp=drive_link',
'https://drive.google.com/file/d/1lL8RPNZWjWJHjohOplqRMGbUHySpcjhy/view?usp=drive_link',
'https://drive.google.com/file/d/1pCshuCUEzohNtQ9W8vot5gF-09fzn8gW/view?usp=drive_link',
'https://drive.google.com/file/d/1qp2s7QsfvjuDwDS6JiNWGaPyaeH9vEd8/view?usp=drive_link',
'https://drive.google.com/file/d/1nBqhKd-Csk2nCwF4Hx95EO41Lmi47amZ/view?usp=drive_link',
'https://drive.google.com/file/d/1vtodzq6i-QQKISHb3WqiOjwjr7Q35dor/view?usp=drive_link',
'https://drive.google.com/file/d/1njC1gE5-yJrTg4pOhjwegDddjxOLMo0Q/view?usp=drive_link',
'https://drive.google.com/file/d/1ncroh-2OaTQWUPPJlzuDjAvgAhXoqqyW/view?usp=drive_link',
'https://drive.google.com/file/d/1p68Dc7dNHsqF_8dr3I9-6PlKdDmhXEYd/view?usp=drive_link',
'https://drive.google.com/file/d/1xApnr2ygb68WX8I57h6favg-PShYA9tu/view?usp=drive_link',
'https://drive.google.com/file/d/1qkbdUH-OPL88Np3fkVgJtAZKc-DbKH-p/view?usp=drive_link',
'https://drive.google.com/file/d/1nFH9aveDRfh_zbKsloJ07qJtR7TuBZV2/view?usp=drive_link',
'https://drive.google.com/file/d/1nBj2_4b6CX9WzfKthK4lpdRaOVo35XUz/view?usp=drive_link',
'https://drive.google.com/file/d/1sx75y8S68bvmUtMRYvhz-7NEuCwMv_vN/view?usp=drive_link',
'https://drive.google.com/file/d/1wA1O_Y6j7X2qCrh-NRzUDaxSxZHB3u7s/view?usp=drive_link',
'https://drive.google.com/file/d/1s95iikc8f_lFAvhq2TsSbNBwDR0ZrJCi/view?usp=drive_link',
'https://drive.google.com/file/d/1sf08LBHcV1mpd4d0lh2IKWcAa4jO_j5o/view?usp=drive_link',
'https://drive.google.com/file/d/1nlt1tW9a2J_G1OO1CDFtmnC3g9I_rDYa/view?usp=drive_link',
'https://drive.google.com/file/d/1p-w8xL8MZtRDPPzYiZ7Xb1f9KaDuuga9/view?usp=drive_link',
'https://drive.google.com/file/d/1rC9TcWVdbYrxNr4qTKvRLsI-IMGYZs3R/view?usp=drive_link',
'https://drive.google.com/file/d/1x6vNJHXXxCyEWTgHnoPw8aBWmCWTMlmr/view?usp=drive_link',
'https://drive.google.com/file/d/1x6WOQzJF8iU0ONx41KG-PrxiFHSYBPJx/view?usp=drive_link',
'https://drive.google.com/file/d/1tp1DxvMnEGmPvD8gUS_UeGiAFcIRq9N7/view?usp=drive_link',
'https://drive.google.com/file/d/1qInYOwfbjgyHprMeRFEK8texzjJgUn8q/view?usp=drive_link',
'https://drive.google.com/file/d/1xI-V--wSbBN5djsZhyG50OijsouQ4dqb/view?usp=drive_link',
'https://drive.google.com/file/d/1wZNkST8i-ShnjMI0jKXpm9V6DfgmuuRY/view?usp=drive_link',
'https://drive.google.com/file/d/1vOCfZqKG7TZ8tlD1LGbDOBiWnj-lHqAG/view?usp=drive_link',
'https://drive.google.com/file/d/1vDL6IDC16XASaELkTe9Ta0SekKvjR1j8/view?usp=drive_link',
'https://drive.google.com/file/d/1s80HuBW819wupqXo6Acj0IhpYozN4IdC/view?usp=drive_link',
'https://drive.google.com/file/d/1mjED8NyjeDqKNEb_ALAosndpWxbmt7N2/view?usp=drive_link',
'https://drive.google.com/file/d/1rQEXp-Qm4hR2hz9clFl-cFVHMblB08Uh/view?usp=drive_link',
'https://drive.google.com/file/d/1mR9yLMhxasS7fbQCmbuM55HLYoR6qIX9/view?usp=drive_link',
'https://drive.google.com/file/d/1ts5ZHf1tWPFDBSKc8zdvTImI-45peCTp/view?usp=drive_link',
'https://drive.google.com/file/d/1o2iGcaAAo9IGJD0BDM-ZFrQo_ykGb14U/view?usp=drive_link',
'https://drive.google.com/file/d/1p9tRswo_sZFnG-2AA0NVjy-6BXY13Pem/view?usp=drive_link',
'https://drive.google.com/file/d/1v-ejXQgJ65Oii1oML_7N7WmwauCIUFtS/view?usp=drive_link',
'https://drive.google.com/file/d/1p47AYy4lEcitn_vj_OQrBxaYyxG65Rmz/view?usp=drive_link',
'https://drive.google.com/file/d/1t8wPrduK3Cj7LPkhiLoctYcOvpp75Vkj/view?usp=drive_link',
'https://drive.google.com/file/d/1rTQM3zT_hHw_iEAwTEHkO06Q0SpdnDCU/view?usp=drive_link',
'https://drive.google.com/file/d/1lSaIENpvXHblqjnEJ58RgG_zQXmDX_kM/view?usp=drive_link',
'https://drive.google.com/file/d/1qeEwWz_zpxecKg7QWAPDchGZNPDffgd1/view?usp=drive_link',
'https://drive.google.com/file/d/1mpdfLviJUUIpy08d7ByIrA0ytyHEnqAw/view?usp=drive_link',
'https://drive.google.com/file/d/1q1EyvelgPZ2NeF2Ha3KkKB5sPmDTxUQJ/view?usp=drive_link',
'https://drive.google.com/file/d/1oqGAu_ZdQV519cjoZNQCe75WB-TSL633/view?usp=drive_link',
'https://drive.google.com/file/d/1qG6nsEFy64P2_xCp_CEOFaKz0PhMZshx/view?usp=drive_link',
'https://drive.google.com/file/d/1oArZ2mNH03R7RGztQJc7DPhFIiOJRhiF/view?usp=drive_link',
'https://drive.google.com/file/d/1m_wc_AkvJr-b3XJgLErpG6skJHaqXK6E/view?usp=drive_link',
'https://drive.google.com/file/d/1oV-y6fXJ8zCuwTNcrq3Sb4qsbs2zEvI5/view?usp=drive_link',
'https://drive.google.com/file/d/1uN0w3DIncSrcjUGyitqjinffFfWe1Z6f/view?usp=drive_link',
'https://drive.google.com/file/d/1ssyfQ4gwyjSWKKhx6pNGFnaYL_5G9tTt/view?usp=drive_link',
'https://drive.google.com/file/d/1umXqYUwXvKfAayV-4bgNOrNngM8UKqYg/view?usp=drive_link',
'https://drive.google.com/file/d/1lCzr44WOfJ2Wg8xHZx4kzPl1Ifc4mjgY/view?usp=drive_link',
'https://drive.google.com/file/d/1tkWay-lkLYyFTdZ8KKZVvrKrZAIx3Rp7/view?usp=drive_link',
'https://drive.google.com/file/d/1xG7aaCudEFPWEhakOUlQtyMrv18L7jGZ/view?usp=drive_link',
'https://drive.google.com/file/d/1ou988IPZDlHQrB-M4pga9me_OZNLkR-B/view?usp=drive_link',
'https://drive.google.com/file/d/1mSskVSjSwDhV0PbKist7dhTOAXQ5kbHP/view?usp=drive_link',
'https://drive.google.com/file/d/1ubYpZ7jtBIE50VMlseXlDvgbkcU9AI8V/view?usp=drive_link',
'https://drive.google.com/file/d/1rt4Zs0TbLOxXQO1YjF9ZBCI6t_cQmeIf/view?usp=drive_link',
'https://drive.google.com/file/d/1mEdhc4KyrhlKdM5gYCQvqDb7_LuGuY2U/view?usp=drive_link',
'https://drive.google.com/file/d/1tVSCYLOwBBAMZ2tkP1nvVQXbzf9qEDfd/view?usp=drive_link',
'https://drive.google.com/file/d/1qpDtuhsjgqv7NNaKOEciIHrCcw6nFLD4/view?usp=drive_link',
'https://drive.google.com/file/d/1n4A1Sgg1_FoeN2qlpoewnzYlVKzOY3My/view?usp=drive_link',
'https://drive.google.com/file/d/1t72VngpKbx1IRzXqkWiCKug0BhQEnY0C/view?usp=drive_link',
'https://drive.google.com/file/d/1qnxvUkHcTI_Zeog_-mo4u1HujfgzndG1/view?usp=drive_link',
'https://drive.google.com/file/d/1m77K1z3CTGRw_GvTsWvoIN3QyX2HmxmX/view?usp=drive_link',
'https://drive.google.com/file/d/1rjqElpgWfGe9UQg6vJpef4ZNIG5F1i33/view?usp=drive_link',
'https://drive.google.com/file/d/1uUOH4QrDG0FcAR9-Yzmnn4s8JE_RkWIp/view?usp=drive_link',
'https://drive.google.com/file/d/1lcESASTu1-QugXF2QJN7ab1DXPWDqLAj/view?usp=drive_link',
'https://drive.google.com/file/d/1n1LAYK_Rq7cY43HZSrrndQsZK0XPatxr/view?usp=drive_link',
'https://drive.google.com/file/d/1rtrnGs9wGyrev3JUpFtwPTAwjCD68PHm/view?usp=drive_link',
'https://drive.google.com/file/d/1o4mMJXyJaxGiQ5nEfDJd2PcqhZS5VCJx/view?usp=drive_link',
'https://drive.google.com/file/d/1toKFyeuH3vlhkfBd7zfEQHr-fskFOdOH/view?usp=drive_link',
'https://drive.google.com/file/d/1sBi5t9cgruRYiSNpirn3YcaSogjoJsAv/view?usp=drive_link',
'https://drive.google.com/file/d/1xYIHGyn1BZhp1a-3b1k08MqNFL2v8hz1/view?usp=drive_link',
'https://drive.google.com/file/d/1qIM5vB3sBUNA-bVwuObQkWaMepXHU6dG/view?usp=drive_link',
'https://drive.google.com/file/d/1r4oEx3Ob048HMSq9ya66rnDWVRbIwXPG/view?usp=drive_link',
'https://drive.google.com/file/d/1qXVLZEhp9fm2e2Aen0Vk9bI1MK8TrR5_/view?usp=drive_link',
'https://drive.google.com/file/d/1vBqzUboe5N_EwUTdGvWcCTfWlYzeELDT/view?usp=drive_link',
'https://drive.google.com/file/d/1oZLnru4Jjnmv3UeCH7Cu6ZgNPxY4nmMQ/view?usp=drive_link',
'https://drive.google.com/file/d/1rCw-3d8re-0c472qT53GZbbpVLHKrZqA/view?usp=drive_link',
'https://drive.google.com/file/d/1mxN-WJTRm1Y5lOlVuNclPc9T2ze-GDR1/view?usp=drive_link',
'https://drive.google.com/file/d/1qwb2NirCIsDb25fVzpE1D7QTNtDcBIGZ/view?usp=drive_link',
'https://drive.google.com/file/d/1qcLoevVfiyWphIPfpFGfT3ODbslkPQjm/view?usp=drive_link',
'https://drive.google.com/file/d/1vBVHxxYYjuDnhR32hBdJv6u4zUG2DvYp/view?usp=drive_link',
'https://drive.google.com/file/d/1wtalhn14jKlW4baVWSslSm1pHXaaEaMk/view?usp=drive_link',
'https://drive.google.com/file/d/1pjQ3AXM-MbzRGSFCtMQD284whGxTb7x4/view?usp=drive_link',
'https://drive.google.com/file/d/1st0r4mww4CdyKFGaB3ykBspNkOBgK9MT/view?usp=drive_link',
'https://drive.google.com/file/d/1uJpSdvfICBJO_Tf6BMTZlzPW7FAF-Nxu/view?usp=drive_link',

'https://drive.google.com/file/d/1G5LcUwqDGMlHNv3pBMwW9x05lK1YV7Nj/view?usp=sharing',

'https://drive.google.com/file/d/184Hk_u6LDsp4OAAA_vtISFCKySYlfjNJ/view?usp=sharing',
'https://drive.google.com/file/d/1t_i2R7p2YupEex6sS8oFttFMe8iZQBcl/view?usp=sharing',
'https://drive.google.com/file/d/1s8Z7L_TuDDOp2vAcsWlFeKxvT-dIJ18A/view?usp=sharing',
'https://drive.google.com/file/d/1sd3MmHrs-HbzfBi5YSc3wA--NuTAgfgt/view?usp=sharing',
'https://drive.google.com/file/d/1xIc2d41RW4amRgkXOvj6j89cAEGpVTdV/view?usp=sharing',
'https://drive.google.com/file/d/1nl5dQM75b4Nu6tMdxZZFeWuu2QazYRp6/view?usp=sharing',
'https://drive.google.com/file/d/1tMdWDNsBXA9ctiuw1X4UYKD3CAYt69rp/view?usp=sharing',
'https://drive.google.com/file/d/1tG7290W8f5Si-cXoFhwqQ5w17bn0P2N9/view?usp=sharing',
'https://drive.google.com/file/d/1pzgJ2d8cZIdeM_Zmwl52AKDMF2zMhsKS/view?usp=sharing',
'https://drive.google.com/file/d/1mJvNpkUctYHlSPxmpXchrKaVNrlObJs4/view?usp=sharing',
'https://drive.google.com/file/d/1sCI-00is8LT6FyQ8ZzavR4xet1QIh17n/view?usp=sharing',
'https://drive.google.com/file/d/1qNrf-gv4oos_gcTK3wxXFUFtCuExHK3B/view?usp=sharing',
'https://drive.google.com/file/d/1uJpSdvfICBJO_Tf6BMTZlzPW7FAF-Nxu/view?usp=sharing',
'https://drive.google.com/file/d/1st0r4mww4CdyKFGaB3ykBspNkOBgK9MT/view?usp=sharing',
'https://drive.google.com/file/d/1pjQ3AXM-MbzRGSFCtMQD284whGxTb7x4/view?usp=sharing',
'https://drive.google.com/file/d/1wtalhn14jKlW4baVWSslSm1pHXaaEaMk/view?usp=sharing',
'https://drive.google.com/file/d/1G0sjWryDMErjRduGjtnPNgkKEwy3ogZ3/view?usp=sharing',
]
async function downloadFile(url, destination) {
    try {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream',
            timeout: 30000, // 30 seconds timeout
        });

        response.data.pipe(fs.createWriteStream(destination));

        return new Promise((resolve, reject) => {
            response.data.on('end', () => {
                resolve();
            });

            response.data.on('error', (err) => {
                reject(err);
            });
        });
    } catch (error) {
        throw new Error(`Failed to download file from ${url}: ${error.message}`);
    }
}

async function downloadFiles() {
    const maxRetries = 3;
    for (let i = 0; i < data.length; i++) {
        let retryCount = 0;
        let success = false;
        while (!success && retryCount < maxRetries) {
            try {
                const url = data[i];
                const fileId = url.match(/\/d\/(.+?)\//)[1];
                const destination = path.join(__dirname, `file_${i+1}.pdf`); // Change the extension if the file type is different

                await downloadFile(`https://drive.google.com/uc?id=${fileId}`, destination);
                console.log(`File ${i+1} downloaded successfully!`);
                success = true;
            } catch (error) {
                retryCount++;
                console.error(`Failed to download file ${i+1}, retrying...`);
            }
        }
        if (!success) {
            console.error(`Failed to download file ${i+1} after ${maxRetries} attempts.`);
        }
    }
}

downloadFiles().catch(error => console.error(error));