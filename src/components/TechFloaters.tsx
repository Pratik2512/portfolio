import React from 'react';
import reactLogo from '/screenshots/react.svg';
import nodeLogo from '/screenshots/node.svg';
import blockchainLogo from '/screenshots/blockchain.svg';
import openaiLogo from '/screenshots/openai.svg';
import solanaLogo from '/screenshots/solana.svg';
import awsLogo from '/screenshots/aws.svg';
import gcpLogo from '/screenshots/gcp.svg';

const techs = [
  { src: reactLogo, alt: 'React', style: 'top-[10%] left-[60%] animate-float1' },
  { src: nodeLogo, alt: 'Node.js', style: 'top-[30%] left-[75%] animate-float2' },
  { src: blockchainLogo, alt: 'Blockchain', style: 'top-[50%] left-[65%] animate-float3' },
  { src: openaiLogo, alt: 'OpenAI', style: 'top-[20%] left-[80%] animate-float4' },
  { src: solanaLogo, alt: 'Solana', style: 'top-[60%] left-[85%] animate-float5' },
  { src: awsLogo, alt: 'AWS', style: 'top-[70%] left-[70%] animate-float6' },
  { src: gcpLogo, alt: 'GCP', style: 'top-[40%] left-[90%] animate-float7' },
];

const TechFloaters = () => (
  <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
    {techs.map((tech, i) => (
      <img
        key={tech.alt}
        src={tech.src}
        alt={tech.alt}
        className={`absolute w-12 h-12 opacity-80 drop-shadow-lg ${tech.style}`}
        style={{ animationDuration: `${5 + i * 1.2}s` }}
      />
    ))}
  </div>
);

export default TechFloaters;
