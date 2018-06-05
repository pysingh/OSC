function ap_match() {
    var results = {};
    results['account'] = [];
    results['contact'] = [];
    results['opportunity'] = [];
    results['activity'] = [];
    results['finance'] = [];
    var ap_search_string = ap$("#ap_search_result_box").val().toLowerCase();
    //lis jones
    if(ap_search_string == 'liz johnson') {
        results['contact'] = [0,1,2];
        results['finance'] = [0];
    }
    else if(ap_search_string == 'bob smith' ||
               ap_search_string == 'robert smith' ||
               ap_search_string == 'bobby smith') {
        results['contact'] = [3, 4, 5, 6];
        results['account'] = [0,1,2,3];
        results['opportunity'] = [0,1,2];
        results['finance'] = [1];
    }
    else if(ap_search_string == 'chuck jiovani') {
        results['contact'] = [7, 8];
        results['finance'] = [2];
    }
    else if(ap_search_string == 'matt garcia') {
        results['contact'] = [9];
        results['finance'] = [3];
    }
    else if (ap_search_string == 'accents software' ||
                ap_search_string == 'act sense software' ||
                ap_search_string == 'axcense software'){
        results['account'] = [4];
        results['activity'] = [0,1];
    }
    else if (ap_search_string == 'cole mitchel' ||
                ap_search_string == 'kole michael' ||
                ap_search_string == 'cole michael' ||
                ap_search_string == 'kole at pinacle' ||
                ap_search_string == 'cole @ pinnacle' ||
                ap_search_string == 'cole mitchell' ||
                ap_search_string == 'mitchel'){
        results['account'] = [0,1,5,6];
        results['contact'] = [10,13,14];
        results['opportunity'] = [0,1];
        results['finance'] = [5];
    }
    else if (ap_search_string == 'jash bakker' ||
                ap_search_string == 'jay baker' ||
                ap_search_string == 'josh at pinacol' ||
                ap_search_string == 'jash @ pinnacle' ||
                ap_search_string == 'josh baker' ||
                ap_search_string == 'joshua baker'){
        results['account'] = [0,1,5,6];
        results['contact'] = [11];
        results['opportunity'] = [0,1];
        results['finance'] = [4];
    }
    else if (ap_search_string == 'robert wright' ||
                ap_search_string == 'bob right' ||
                ap_search_string == 'bobby righte' ||
                ap_search_string == 'bob at kulick' ||
                ap_search_string == 'kulicke and soffa industries, inc.' ||
                ap_search_string == 'coolike and sophia' ||
                ap_search_string == 'kulick & sofia'){
        results['account'] = [7,8,9];
        results['contact'] = [12];
    }
    else if (ap_search_string == 'pinnacle' ||
                ap_search_string == 'pinnocle' ||
                ap_search_string == 'pinacol' ||
                ap_search_string == 'pinecol' ||
                ap_search_string == 'pinccole opp'){
        results['account'] = [0,1,5,6];
        results['contact'] = [10,11];
        results['opportunity'] = [0,1];
        results['finance'] = [4,5];
    }
    else if (ap_search_string == 'matthew hopper' ||
                ap_search_string == 'mat hoper' ||
                ap_search_string == 'matt hopper' ||
                ap_search_string == 'matt hooper'){
        results['account'] = [4,0,1,5,6];
        results['contact'] = [10,11];
        results['activity'] = [0,1];
        results['opportunity'] = [0,1,2];
        results['finance'] = [4,5];
    }
    return results;
}