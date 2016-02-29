import urllib
import urllib2
import requests
from requests.auth import HTTPBasicAuth

url = 'https://ccccsprd.ccc.edu/psc/ccccsprd/EMPLOYEE/CS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL'
values = {'ICAJAX' : '1',
      'ICAction' : 'CLASS_SRCH_WRK2_SSR_PB_MODIFY',
      'SSR_CLSRCH_WRK_CAMPUS$0' : 'MX' }

data = urllib.urlencode(values)

r = requests.post(url, auth=HTTPBasicAuth('svbens', 'pass'), params="ICAJAX=1&ICNAVTYPEDROPDOWN=0&ICType=Panel&ICElementNum=0&ICStateNum=8&ICAction=CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH&ICXPos=0&ICYPos=0&ResponsetoDiffFrame=-1&TargetFrameName=None&FacetPath=None&ICFocus=&ICSaveWarningFilter=0&ICChanged=-1&ICResubmit=0&ICSID=Uif%2FrtautkOexPRDY%2FSUVYR3fjfJ5qp8R1UgIDFHcns%3D&ICActionPrompt=false&ICFind=&ICAddCount=&ICAPPCLSDATA=&SSR_CLSRCH_WRK_CAMPUS$0=MX")

# response = urllib2.urlopen(r)
# the_page = response.read()

print r.content