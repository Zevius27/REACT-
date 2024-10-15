import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [copy, setCopy] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) {
      str += '0123456789';
    }
    if (symbol) {
      str += '!@#$%^&*()_+';
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, number, symbol]);


  const copyToBoard = useCallback(() => {
    passwordRef.current?.select();
   navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, number, symbol, generatePassword]);

  return (
    <>
      <div className="w-full grid grid-rows-2 max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-white border  border-blue-500">
        <div className="flex shadow-md rounded-lg overflow-hidden px-4 py-2">
          <input type="text"
            value={password}
            className='outline-none w-full px-3 border border-red-500 py-1 rounded-sm'
            placeholder='password'
            readOnly
            ref={passwordRef}

          />
          <button className="bg-blue-500 text-white rounded px-3 py-0.5 shrink-0 "  onClick={copyToBoard}>
            copy
          </button>

        </div>





        <div className=" flex text-sm gap-x-3 border-solid px-4 py-2 ml-1">
          <div className="flex items-center gap-x-1  " >
            <input type="range"
              max={500}
              min={8}
              onChange={(e) => setLength(e.target.value)}
              value={length}
              className='cursor-pointer '


            />

            <label >
              length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={number} onChange={(e) => setNumber(e.target.checked)} className="cursor-pointer" />
            <label >number</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={symbol} onChange={(a) => setSymbol(a.target.checked)} className="cursor-pointer" />
            <label >symbol</label>
          </div>
        </div>





      </div>
    </>
  );
}

export default App;
